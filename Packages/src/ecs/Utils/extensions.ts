// import { DG, FlowCanvas, SqlCipher4Unity3D, TMPro, UnityEngine } from 'csharp';
// import {$extention} from 'puerts';
// $extention(string, TMPro.TMPro_ExtensionMethods)
// $extention(System.Span<byte>, System.SpanExtensions)
// $extention(System.ReadOnlySpan<byte>, System.SpanExtensions)
// $extention(System.Type, SQLiteNetExtensions.Extensions.ReflectionExtensions)
// $extention(System.Reflection.MethodInfo, ParadoxNotion.ReflectionTools)
// $extention(System.Reflection.TypeInfo, System.Reflection.RuntimeReflectionExtensions)
// $extention(System.Delegate, ParadoxNotion.ReflectionTools)
// $extention(UnityEngine.Renderer, UnityEngine.RendererExtensions)
// $extention(UnityEngine.Texture2D, UnityEngine.ImageConversion)
// $extention(UnityEngine.ParticleSystem, UnityEngine.ParticlePhysicsExtensions)
// $extention(UnityEngine.SceneManagement.Scene, Utils.Scenes.SceneUtil)
// $extention(System.ReadOnlySpan<System.Char>, System.MemoryExtensions)
// $extention(System.Text.StringBuilder, System.StringBuilderExt)
// $extention(FlowCanvas.FlowGraph, FlowCanvas.FlowGraphExtensions)
// $extention(System.Reflection.MethodBase, ParadoxNotion.ReflectionTools)
// $extention(System.Reflection.MemberInfo, ParadoxNotion.ReflectionTools)
// $extention(System.Reflection.PropertyInfo, SQLiteNetExtensions.Extensions.ReflectionExtensions)
// $extention(System.Reflection.FieldInfo, ParadoxNotion.ReflectionTools)
// $extention(System.Reflection.EventInfo, ParadoxNotion.ReflectionTools)
// $extention(System.Reflection.ParameterInfo, ParadoxNotion.ReflectionTools)
// $extention(System.Array, ParadoxNotion.ReflectionTools)
// $extention(UnityEngine.Color, TMPro.TMPro_ExtensionMethods)
// $extention(UnityEngine.GUIStyle, ParadoxNotion.GUIStyleUtils)
// $extention(UnityEngine.LayerMask, ParadoxNotion.LayerUtils)
// $extention(UnityEngine.Component, DG.Tweening.ShortcutExtensions)
// $extention(UnityEngine.GameObject, Game.Core)
// $extention(UnityEngine.Rect, ParadoxNotion.RectUtils)
// $extention(UnityEngine.Vector2, UnityEngine.UI.Extensions.UIExtensionMethods)
// $extention(System.Object, GameEngine.Extensions.Strings)
// $extention(float, GameEngine.Extensions.FloatExtensions)
// $extention(UnityEngine.UI.ScrollRect, UnityEngine.UI.Extensions.ScrollRectExtensions)
// $extention(UnityEngine.RectTransform, GameEngine.Extensions.UnityComponentExtention)
// $extention(UnityEngine.Canvas, UnityEngine.UI.Extensions.UIExtensionMethods)
// $extention(System.Collections.Generic.IEnumerable<UnityEngine.GameObject>, Unity.Linq.GameObjectExtensions)
// $extention(NodeCanvas.Framework.IGraphAssignable, NodeCanvas.Framework.IGraphAssignableExtensions)
// $extention(NodeCanvas.Framework.IBlackboard, NodeCanvas.Framework.IBlackboardExtensions)
// $extention(GameEngine.Models.Contracts.DbData<T>, GameEngine.Models.Contracts.IDataExtension)
// $extention(UnityEngine.Object, GameEngine.Extensions.UnityEngineObjectExtention)
// $extention(byte[], GameEngine.Extensions.StringExtensions)
// $extention(UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle, GameEngine.Extensions.AddressablesExtesion)
// $extention(UnityEngine.Events.UnityEvent, GameEngine.Extensions.AddressablesExtesion)
// $extention(UnityEngine.Transform, DG.Tweening.ShortcutExtensions)
// $extention(UnityEngine.MonoBehaviour, GameEngine.Extensions.MonoBehaviourExtension)
// $extention(System.Collections.Generic.List<string>, GameEngine.Extensions.ListExt)
// $extention(int[,], GameEngine.Extensions.Lists)
// $extention(UnityEngine.ScriptableObject, GameEngine.Extensions.ScritableExt)
// $extention(System.IO.FileInfo, GameEngine.Extensions.Files)
// $extention(UnityEngine.UI.Image, GameEngine.Extensions.UIExtend)
// $extention(UnityEngine.AsyncOperation, GameEngine.Extensions.ExtensionMethods)
// $extention(UnityEngine.Networking.UnityWebRequestAsyncOperation, GameEngine.Extensions.ExtensionMethods)
// $extention(UnityEngine.AnimationCurve, GameEngine.Extensions.UnityComponentExtention)
// $extention(UnityEngine.Animator, GameEngine.Extensions.UnityComponentExtention)
// $extention(UnityEngine.Vector3, TMPro.TMPro_ExtensionMethods)
// $extention(UnityEngine.PolygonCollider2D, Common.PolygonCollider2DExt)
// $extention(UnityEngine.Timeline.TrackAsset, UnityEngine.Timeline.TrackAssetExtensions)
// $extention(System.Char[], TMPro.TMPro_ExtensionMethods)
// $extention(int[], TMPro.TMPro_ExtensionMethods)
// $extention(System.Collections.Generic.List<T>, TMPro.TMPro_ExtensionMethods)
// $extention(UnityEngine.Color32, TMPro.TMPro_ExtensionMethods)
// $extention(UnityEngine.Quaternion, TMPro.TMPro_ExtensionMethods)
// $extention(SqlCipher4Unity3D.SQLiteConnection, SQLiteNetExtensions.Extensions.WriteOperations)
// $extention(DG.Tweening.Tween, DG.Tweening.Core.Extensions)
// $extention(UnityEngine.Camera, DG.Tweening.ShortcutExtensions)
// $extention(UnityEngine.Light, DG.Tweening.ShortcutExtensions)
// $extention(UnityEngine.LineRenderer, DG.Tweening.ShortcutExtensions)
// $extention(UnityEngine.Material, DG.Tweening.ShortcutExtensions)
// $extention(UnityEngine.TrailRenderer, DG.Tweening.ShortcutExtensions)
// $extention(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions)
// $extention(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions)
// $extention(DG.Tweening.Core.TweenerCore<UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions>, DG.Tweening.TweenSettingsExtensions)
// $extention(DG.Tweening.Core.TweenerCore<UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions>, DG.Tweening.TweenSettingsExtensions)
// $extention(DG.Tweening.Core.TweenerCore<float, float, DG.Tweening.Plugins.Options.FloatOptions>, DG.Tweening.TweenSettingsExtensions)
// $extention(DG.Tweening.Core.TweenerCore<UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.Options.VectorOptions>, DG.Tweening.TweenSettingsExtensions)
// $extention(DG.Tweening.Core.TweenerCore<UnityEngine.Vector4, UnityEngine.Vector4, DG.Tweening.Plugins.Options.VectorOptions>, DG.Tweening.TweenSettingsExtensions)
// $extention(DG.Tweening.Core.TweenerCore<UnityEngine.Quaternion, UnityEngine.Vector3, DG.Tweening.Plugins.Options.QuaternionOptions>, DG.Tweening.TweenSettingsExtensions)
// $extention(DG.Tweening.Core.TweenerCore<UnityEngine.Rect, UnityEngine.Rect, DG.Tweening.Plugins.Options.RectOptions>, DG.Tweening.TweenSettingsExtensions)
// $extention(DG.Tweening.Core.TweenerCore<string, string, DG.Tweening.Plugins.Options.StringOptions>, DG.Tweening.TweenSettingsExtensions)
// $extention(DG.Tweening.Core.TweenerCore<UnityEngine.Vector3, UnityEngine.Vector3[], DG.Tweening.Plugins.Options.Vector3ArrayOptions>, DG.Tweening.TweenSettingsExtensions)
// $extention(DG.Tweening.Core.TweenerCore<UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions>, DG.Tweening.TweenSettingsExtensions)
// $extention(PuertsTest.BaseClass, PuertsTest.BaseClassExtension)
//
//