import { RunService as Runtime } from "@rbxts/services";
import { Carbon as Framework, Assets, Player, Character, UI, Camera  } from "shared/Carbon";
import Wave from "shared/classes/Wave";

const Carbon = new Framework(script);

const breathing: Wave = new Wave(.05, 1.5);
Runtime.RenderStepped.Connect((dt: number): void => {
    const wave = breathing.Update(dt);
    const breatheCf = new CFrame(0, wave, 0);
    Camera.CFrame = Camera.CFrame.mul(breatheCf);
});