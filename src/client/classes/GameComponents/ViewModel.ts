import { Carbon as Framework, Camera, Assets } from "shared/Carbon";
import { BaseComponent } from "shared/Component";

class Offsets {
    public static Final =  new CFrame();
    public static ViewModel =  new CFrame(0, -.1, 1.5);
}

export class ViewModel implements BaseComponent {
    public Name = "ViewModel";
    
    private vm: Model = Assets.ViewModel.Clone();
    private flashlight: Model = Assets.Flashlight.Clone();
    
    public Update(dt: number): void {
        Offsets.Final = Camera.CFrame
            .mul(Offsets.ViewModel);
        
        this.vm.SetPrimaryPartCFrame(Offsets.Final)
    }
}