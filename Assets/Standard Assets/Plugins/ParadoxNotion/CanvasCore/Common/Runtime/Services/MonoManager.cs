﻿using System;
using UnityEngine;


namespace ParadoxNotion.Services
{

    ///Singleton. Automatically added when needed, collectively calls methods that needs updating amongst other things relevant to MonoBehaviours
    public class MonoManager : MonoBehaviour
    {
        ///Mode used in Add and Remove UpdateCall
        public enum UpdateMode
        {
            NormalUpdate = 0,
            LateUpdate = 1,
            FixedUpdate = 2,
        }

        public event Action onUpdate;
        public event Action onLateUpdate;
        public event Action onFixedUpdate;
        public event Action onApplicationQuit;
        public event Action<bool> onApplicationPause;

#pragma warning disable 0067
        ///onGUI is only invoked in editor
        public event Action onGUI;
#pragma warning restore 0067

        private static bool isQuiting;

        private static MonoManager _current;
        public static MonoManager current {
            get
            {
                if ( _current == null && Threader.applicationIsPlaying && !isQuiting ) {
                    _current = FindObjectOfType<MonoManager>();
                    if ( _current == null ) {
                        _current = new GameObject("_MonoManager").AddComponent<MonoManager>();
                    }
                }
                return _current;
            }
        }

#if UNITY_2019_3_OR_NEWER
        [UnityEngine.RuntimeInitializeOnLoadMethod(UnityEngine.RuntimeInitializeLoadType.SubsystemRegistration)]
        static void Purge() { isQuiting = false; }
#endif

        ///Creates the MonoManager singleton
        public static void Create() { _current = current; }

        ///Adds an update call based on mode provided
        public void AddUpdateCall(UpdateMode mode, System.Action call) {
            switch ( mode ) {
                case ( UpdateMode.NormalUpdate ): onUpdate += call; break;
                case ( UpdateMode.LateUpdate ): onLateUpdate += call; break;
                case ( UpdateMode.FixedUpdate ): onFixedUpdate += call; break;
            }
        }

        ///Removes an update call based on mode provided
        public void RemoveUpdateCall(UpdateMode mode, System.Action call) {
            switch ( mode ) {
                case ( UpdateMode.NormalUpdate ): onUpdate -= call; break;
                case ( UpdateMode.LateUpdate ): onLateUpdate -= call; break;
                case ( UpdateMode.FixedUpdate ): onFixedUpdate -= call; break;
            }
        }

        ///----------------------------------------------------------------------------------------------

        protected void Awake() {
            if ( _current != null && _current != this ) {
                DestroyImmediate(this.gameObject);
                return;
            }

            DontDestroyOnLoad(gameObject);
            _current = this;
        }

        protected void OnApplicationQuit() {
            isQuiting = true;
            if ( onApplicationQuit != null ) {
                onApplicationQuit();
            }
        }

        protected void OnApplicationPause(bool isPause) {
            if ( onApplicationPause != null ) {
                onApplicationPause(isPause);
            }
        }

        protected void Update() {
            if ( onUpdate != null ) { onUpdate(); }
        }

        protected void LateUpdate() {
            if ( onLateUpdate != null ) { onLateUpdate(); }
        }

        protected void FixedUpdate() {
            if ( onFixedUpdate != null ) { onFixedUpdate(); }
        }

#if UNITY_EDITOR
        protected void OnGUI() {
            if ( onGUI != null ) { onGUI(); }
        }
#endif

    }
}