import { Carbon as Framework, Camera, Assets, Character } from "shared/Carbon";
import { ModelAnimator } from "shared/classes/ModelAnimator";
import { BaseComponent } from "shared/Component";

const { rad, round } = math;

class Offsets {
    public static Final =  new CFrame();
    public static ViewModel =  new CFrame(0, 0, 0);
    public static ViewModelAngular = CFrame.Angles(rad(35), 0, 0);
}

export class ViewModel extends ModelAnimator implements BaseComponent {
    public Name = "ViewModel";
    
    private vm: Model;
    private flashlight: Model;
    private humanoid: Humanoid;

    constructor() {
        super(Assets.ViewModel.Clone());
        this.vm = this.Model;  
        this.flashlight = Assets.Flashlight.Clone();
        this.humanoid = Character.WaitForChild("Humanoid") as Humanoid;
    }

    public Start(): void {
        this.vm.Parent = Camera;
        this.Animate("Idle");

        this.humanoid.Running.Connect((spd: number) => {
            spd = round(spd);
            if (spd >= this.humanoid.WalkSpeed)
                this.Animate("Walk");
            else
                this.Animate("Idle");
        });
    }
    
    public Update(dt: number): void {
        Offsets.Final = Camera.CFrame
            .mul(Offsets.ViewModel)
            .mul(Offsets.ViewModelAngular);
        
        this.vm.SetPrimaryPartCFrame(Offsets.Final);
    }
}