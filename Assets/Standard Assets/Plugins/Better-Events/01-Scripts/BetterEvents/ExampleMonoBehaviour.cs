﻿using UnityEngine;

namespace BetterEvents {

public class ExampleMonoBehaviour : MonoBehaviour
{
    public BetterEvent MyEvent;

    void Update()
    {
        if (Input.GetKey(KeyCode.Space))
        {
            this.MyEvent.Invoke();
        }
    }
}

}
