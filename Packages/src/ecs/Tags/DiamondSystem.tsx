import { GameEngine, MoreTags, UnityEngine } from 'csharp';
import React from 'react';
import { ASystem } from 'Tags/ASystem';
import Tags = MoreTags.Tags;
import TagSystem = MoreTags.TagSystem;
import Debug = UnityEngine.Debug;
import Strings = GameEngine.Extensions.Strings;

export class DiamondSystem extends ASystem {
    public render(): React.ReactNode
    {
        if (this.props.tags == null) return null;
        Debug.Log(Strings.ToBlue(`${this.gameObject.name} diamond found, ${user.coin}`))
    
        TagSystem.SetText(this.gameObject, user.diamond)
        return null;
    }
}