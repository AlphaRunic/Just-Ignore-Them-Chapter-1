import { Carbon as Framework, Camera, Assets } from "shared/Carbon";
import { BaseComponent } from "shared/Component";

const { rad } = math;

class Offsets {
    public static Final =  new CFrame();
    public static ViewModel =  new CFrame(0, -.1, .3);
    public static ViewModelAngular = CFrame.Angles(-rad(30), 0, 0);
}

export class ViewModel implements BaseComponent {
    public Name = "ViewModel";
    
    private vm: Model = Assets.ViewModel.Clone();
    private flashlight: Model = Assets.Flashlight.Clone();

    public Start(): void {
        this.vm.Parent = Camera;
    }
    
    public Update(dt: number): void {
        Offsets.Final = Camera.CFrame
            .mul(Offsets.ViewModel)
            .mul(Offsets.ViewModelAngular);
        
        this.vm.SetPrimaryPartCFrame(Offsets.Final)
    }
}