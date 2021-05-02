import { Carbon as Framework, Camera } from "shared/Carbon";
import { BaseComponent } from "shared/Component";
import Wave from "shared/classes/Wave";
import WalkCycleSprings from "../WalkCycleSprings";

export class CameraAnimation implements BaseComponent {
    public Name = "CameraAnimation";

    private breathing = new Wave(.05, 1.5);
    private walkCycle = new WalkCycleSprings(35, 35, 8);

    public Update(dt: number): void {
        let springCf = new CFrame();

        const wave: number = this.breathing.Update(dt);
        const breatheCf = new CFrame(0, wave, 0);

        const walkAnim: CFrame = this.walkCycle.Update(dt);
        
        springCf = springCf
            .mul(walkAnim);

        Camera.CFrame = Camera.CFrame
            .mul(breatheCf)
            .mul(springCf);
    }
}