using Sirenix.Utilities;
using System;
using System.Linq;
using UnityEditor;

#if UNITY_EDITOR

#endif

namespace GameEngine.Attributes {

[AttributeUsage(AttributeTargets.Class)]
public class PreloadSettingAttribute : Attribute {
    public static bool Inited;

#if UNITY_EDITOR

    // [InitializeOnLoadMethod]
    // static void SetFirst()
    // {
    //     EditorSceneManager.sceneOpened += (scene, mode) => {
    //         if (!Inited) {
    //             Inited = true;
    //         }
    //     };
    // }

    // /// <summary>
    // /// Raises the initialize on load method event.
    // /// </summary>
    // [InitializeOnLoadMethod]
    // static void OnInitializeOnLoadMethod()
    // {
    //     //EditorApplication.delayCall += () => Valid();
    //     GlobalHandle.instance.runner[typeof(PreloadSettingAttribute)] = Valid;
    // }

    [MenuItem("Tools/更新 Preloads")]
    [InitializeOnLoadMethod]
    static void Valid()
    {
        //if (!Inited) return;

        // if (EditorApplication.isUpdating || EditorApplication.isCompiling || Core.isBuilding) {
        //     return;
        // }

        //if(SceneManager.GetActiveScene())

        AppDomain.CurrentDomain.GetAssemblies()
            .Where(a => !a.IsDynamic /* && a.GetName().Name == "Assembly-CSharp"*/)
            .SelectMany(a => a.GetExportedTypes())
            .Where(t => t.IsDefined(typeof(PreloadSettingAttribute), true))
            .ForEach(type => {
                //Debug.Log(type.FullName);
                Core.FindOrCreatePreloadAsset(type);
            });
    }
#endif

}

}