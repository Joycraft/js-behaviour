﻿using System.Linq;
using Puerts;
using Sirenix.Utilities;
using Unity.Assertions;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace Sandbox
{
    [UnityEditor.InitializeOnLoad]
    public class ExcuteInEditorLoad
    {
        /// <summary>
        /// 在编辑器启动时，提前处理点啥，配置些工程需要的环境啥的。
        /// </summary>
        static ExcuteInEditorLoad()
        {
            Debug.Log("ExecuteInEditorLoad()");
            UnityEditor.EditorApplication.delayCall += DoSomethingPrepare;
        }

        /// <summary>
        /// 在编辑器启动时，提前处理点啥，配置些工程需要的环境啥的。
        /// </summary>
        static void DoSomethingPrepare()
        {
            if (Application.isPlaying) return;
            var path = AssetDatabase.FindAssets("JsGlobal t:Scene").Select(AssetDatabase.GUIDToAssetPath)
                .FirstOrDefault();
            Assert.IsFalse(path.IsNullOrWhitespace(), $"{path} IsValid()");
            var scene = SceneManager.GetSceneByPath(path);
            if (!scene.isLoaded) {
                Debug.Log(path);
                Debug.Log("jsglobal not loaded");
                EditorSceneManager.OpenScene(path, OpenSceneMode.Additive);
            }
//            }
        }
    }
}