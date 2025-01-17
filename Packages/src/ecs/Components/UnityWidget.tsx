import * as csharp from 'csharp';
import { UnityEngine } from 'csharp';
import puerts from 'puerts';

export class UnityWidget {
    private type: any;
    private callbackRemovers:any = {};
    private nativePtr: UnityEngine.GameObject;
    private myPropsWillChange:any = {};
    private callBackWillAdd:any = {};
    private compPtr: any;
    
    constructor(type, props) {
        this.type = type;
        this.callbackRemovers = {};
        try {
            this.init(type, props);
        } catch (e) {
            console.error("create " + type + " throw " + e);
        }
    }
    
    init(type, props) {
        console.log('init ' + type)
        if (type === 'GameObject') {
            this.nativePtr = new csharp.UnityEngine.GameObject();
        } else {
            this.myPropsWillChange = {};
            this.callBackWillAdd = {};
            for (const key in props) {
                let val = props[key];
                if (typeof val === 'function') {
                    this.callBackWillAdd[key] = val;
                } else if (key !== 'children') {
                    this.myPropsWillChange[key] = val;
                }
            }
        }
    }
    
    mergeComp() {
        if (this.compPtr) {
            for (let i in this.myPropsWillChange) {
                if (this.compPtr[i] !== undefined) {
                    this.compPtr[i] = this.myPropsWillChange[i];
                }
            }
            for (let i in this.callBackWillAdd) {
                this.unbind(i);
                this.bind(i, this.callBackWillAdd[i])
                this.callbackRemovers[i] = this.callBackWillAdd[i];
            }
        }
    }
    
    getComp(gameObject) {
        if (!this.nativePtr) {
            console.log(this.type)
            this.nativePtr = gameObject;
            let cType = csharp;
            for (let i of this.type.split('.')) {
                cType = cType[i];
            }
            this.compPtr = gameObject.AddComponent(puerts.$typeof(cType as any));
        }
    }
    
    bind(name, callback) {
        if (this.compPtr[name] !== undefined) {
            this.callbackRemovers[name] = callback;
            this.compPtr[name].AddListener(callback)
        }
        
    }
    
    update(oldProps, newProps) {
        this.myPropsWillChange = {};
        this.callBackWillAdd = {};
        
        let propChange = false;
        for (var key in newProps) {
            let oldProp = oldProps[key];
            let newProp = newProps[key];
            if (key !== 'children' && oldProp !== newProp) {
                if (typeof newProp === 'function') {
                    this.callBackWillAdd[key] = newProp;
                } else {
                    this.myPropsWillChange[key] = newProp;
                    propChange = true;
                }
            }
        }
        this.mergeComp();
    }
    
    unbind(name) {
        if (this.compPtr && this.compPtr[name] !== undefined) {
            let remover = this.callbackRemovers[name];
            this.callbackRemovers[name] = undefined;
            if (remover) {
                this.compPtr[name].RemoveListener(remover);
            }
        }
    }
    
    unbindAll() {
        if (this.compPtr) {
            for (var key in this.callbackRemovers) {
                if (this.compPtr[name as any] !== undefined) {
                    this.compPtr[name as any].RemoveAllListeners(/*remover*/);
                }
            }
            this.callbackRemovers = {};
        }
    }
    
    appendChild(child) {
        console.log("add", child.type)
        if (!child.nativePtr) {
            child.getComp(this.nativePtr);
            child.mergeComp();
        } else {
            child.nativePtr.transform.SetParent(this.nativePtr.transform)
        }
    }
    
    removeChild(child) {
        child.unbindAll();
        if (child.compPtr) {
            csharp.UnityEngine.Object.Destroy(child.compPtr);
        } else {
            child.nativePtr.transform.SetParent(null)
            csharp.UnityEngine.Object.Destroy(child.nativePtr);
        }
    }
}