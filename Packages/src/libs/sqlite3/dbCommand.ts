import { SqlCipher4Unity3D } from 'csharp';
import { DBConnection } from './dbConnection';
import { DBMapping } from './dbMapping';
import SQLiteCommand = SqlCipher4Unity3D.SQLiteCommand;

// type SqliteCommand = CS.Mono.Data.Sqlite.SqliteCommand;
// type SqliteDataReader = CS.Mono.Data.Sqlite.SqliteDataReader;
// const SqliteParameter = CS.Mono.Data.Sqlite.SqliteParameter;
// const DbType = CS.System.Data.DbType;

function ReadValue(reader: SQLiteCommand, index: string | number, type: string) {
    if (typeof index === 'string') {
        index = reader.GetOrdinal(index);
        return ReadValue(reader, index, type);
    }
    if (reader.IsDBNull(index)) return undefined;
    
    switch (type) {
        case 'string':
            return reader.GetString(index);
        case 'number':
            return reader.GetDouble(index);
        case 'bigint':
            return reader.GetInt64(index);
        case 'boolean':
            return reader.GetInt32(index) != 0;
            //对Object类型从Json反序列化
        case 'object':
            return JSON.parse(reader.GetString(index));
    }
    
    throw new Error('NotSupportedException: Cannot store type ' + type);
}

function BindParameter(command: SQLiteCommand, value: any): void {
    /**
     * SqliteParameter(DbType dbType, object value)构造函数可正常使用
     * SqliteParameter(DbType dbType, string value)不是插入数值的构造
     * 此处请自行封装方法
     */
    if (value === undefined || value === null || value === void 0) {
        return command.BindString('');
    }
    
    switch (typeof (value)) {
        case 'string':
            return command.BindString(value);
        case 'number':
            return command.BindDouble(value);
        case 'bigint':
            return command.BindInt64(value);
        case 'boolean':
            return command.BindBoolean(value);
            //对Object类型进行Json序列化
        case 'object':
            return command.BindJson(value);
    }
    
    throw new Error('NotSupportedException: Cannot store type ' + typeof (value));
}

function copyValue(val: any) {
    switch (typeof (val)) {
        case 'object':
            let ret: object = val instanceof Array ? [] : Object.create(Object.getPrototypeOf(val));
            Object.assign(ret, val);
            return ret;
        case 'function':
            return val();
        default:
            return val;
    }
}

class DBCommand {
    commandText: string;
    private _conn: DBConnection;
    private _bindings: Array<any>;
    
    constructor(conn: DBConnection) {
        this._conn = conn;
        this.commandText = '';
        this._bindings = [];
    }
    
    executeUpdate() {
        if (this._conn.trace) console.log(this);
        
        let command = this.prepare();
        try {
            return command.ExecuteNonQuery();
        } finally {
            this.finally(command);
        }
    }
    
    executeQuery<T extends object>(map: DBMapping) {
        if (this._conn.trace) console.log(this);
        
        let command = this.prepare();
        let reader: SQLiteCommand;
        try {
            let columns = map.columns;
            let result = new Array<T>();
            //Execute Query
            reader = command.ExecuteReader();
            while (reader.Read()) {
                let obj = map.createInstance();
                for (let i = 0; i < columns.length; i++) {
                    let col = columns[i];
                    let val = ReadValue(reader, col.name, col.propType) ?? copyValue(col.defaultValue);
                    if (val !== undefined && val !== null && val !== void 0) obj[col.prop] = val;
                }
                result.push(obj as T);
            }
            return result;
        } finally {
            this.finally(command, reader);
        }
    }
    
    executeScalar<T>(type?: 'string' | 'number' | 'bigint' | 'boolean') {
        if (this._conn.trace) console.log(this);
        
        let command = this.prepare();
        let reader: SQLiteCommand;
        try {
            reader = command.ExecuteReader();
            while (reader.Read()) {
                return ReadValue(reader, 0, type ?? 'string') as T;
            }
        } finally {
            this.finally(command, reader);
        }
        return null;
    }
    
    lastInserRowid(map: DBMapping) {
        let query = 'SELECT last_insert_rowid() FROM "' + map.tableName + '";';
        if (this._conn.trace) console.log(query);
    
        let command = this._conn.handle.CreateCommand(query);
        //command.CommandText = query;
        //command.Prepare();
        let reader: SQLiteCommand;
        try {
            reader = command.ExecuteReader();
            while (reader.Read()) {
                return ReadValue(reader, 0, map.pk.propType);
            }
        } finally {
            this.finally(command, reader);
        }
        return -1;
    }
    
    bind(val: any) {
        this._bindings.push(val);
    }
    
    private bindAll(command: SQLiteCommand) {
        for (let val of this._bindings) {
            BindParameter(command, val);
        }
    }
    
    private prepare(): SQLiteCommand {
        let command = this._conn.handle.CreateCommand(this.commandText);
        //command.Prepare();
        this.bindAll(command);
        return command;
    }
    
    private finally(command: SQLiteCommand, reader?: SQLiteCommand) {
        reader?.Finally();
        command = null;
        reader = null;
    }
    
    toString() {
        return this.commandText + '\nBindings:' + this._bindings;
    }
}

export {
    BindParameter, ReadValue, DBCommand,
};
