import { Carbon as Framework, Assets, Player, UI, Camera, Character  } from "shared/Carbon";
import Wave from "shared/classes/Wave";
import WalkCycleSprings from "./classes/WalkCycleSprings";

const Carbon = new Framework(script);

const breathing: Wave = new Wave(.05, 1.5); 
const walkCycle: WalkCycleSprings = new WalkCycleSprings(30, 35, 8);

Carbon.Render.Connect((dt: number): void => {
    let springCf: CFrame = new CFrame();

    const wave: number = breathing.Update(dt);
    const breatheCf: CFrame = new CFrame(0, wave, 0);

    const walkAnim = walkCycle.Update(dt);
    
    springCf = springCf
        .mul(walkAnim);

    Camera.CFrame = Camera.CFrame
        .mul(breatheCf)
        .mul(springCf);
});