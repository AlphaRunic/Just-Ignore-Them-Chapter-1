import { Players } from "@rbxts/services";
import { Carbon as Framework, Assets, NullishBoolean } from "shared/Carbon";
import Footsteps from "./classes/Footsteps";

const Carbon = new Framework(script);

Players.PlayerAdded.Connect((Player: Player) => {
    Player.CharacterAdded.Connect((Character: Model) => {
        print(`Character added for player: ${Player.Name}`)
        Character.GetDescendants()
            .filter((i: Instance): NullishBoolean => {
                return i.IsA("Sound");
            })
            .forEach((soundInstance: Instance): void => {
                const sound = soundInstance as Sound;
                sound.PlayOnRemove = false;
                sound.Destroy();
            });

        const footsteps: Footsteps = new Footsteps(Character);
        Carbon.Update.Connect(() => footsteps.Update())
    });
});