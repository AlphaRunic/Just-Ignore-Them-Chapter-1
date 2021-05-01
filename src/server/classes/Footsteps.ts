import { SoundService as Sound, StarterPlayer } from "@rbxts/services"

export = class Footsteps {
    private materials: SoundGroup = Sound.FootstepSounds;
    private lastMaterial: Enum.Material = Enum.Material.Air;
    private walking: boolean = false;
    private humanoid: Humanoid;

    public constructor(
        private character: Model
    ) {
        this.humanoid = this.character.WaitForChild("Humanoid") as Humanoid;

        this.humanoid.Running.Connect((spd: number): void => {
            spd = math.round(spd);
            if (spd >= this.humanoid.WalkSpeed)
                this.walking = true;
            else
                this.walking = false;
        });
    }

    private GetMaterial(): Enum.Material {
        let floorMat: Enum.Material = this.humanoid.FloorMaterial;
        if (!floorMat)
            floorMat = Enum.Material.Air;
        
        return floorMat;
    }

    private MaterialToString(material: Enum.Material): string {
        return tostring(material).split("Enum.Material.")[1];
    }

    private Activate(): void {
        const material: Enum.Material = this.GetMaterial();
        const materialStr: string = this.MaterialToString(material);
        const lastMaterial: string = this.MaterialToString(this.lastMaterial);

        if (this.lastMaterial !== Enum.Material.Air && material !== this.lastMaterial)
            (this.materials.WaitForChild(materialStr) as Sound).Pause();

        const materialSound: Sound = this.materials.WaitForChild(materialStr) as Sound;
        materialSound.PlaybackSpeed = this.humanoid.WalkSpeed / 12;
        materialSound.Play();
        this.lastMaterial = material;
    }

    private Deactivate(): void {
        this.materials.GetChildren()
            .forEach((material: Instance): void => {
                const materialSound = material as Sound;
                materialSound.Pause();
            });
    }

    public Update(): void {
        if (this.walking) 
            this.Activate();
        else
            this.Deactivate();
    }
}