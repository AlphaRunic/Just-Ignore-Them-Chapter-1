import { Character } from "shared/Carbon";
import Spring from "shared/classes/Spring";
import WalkAnim from "./WalkAnim";

const characterRoot = Character.WaitForChild("HumanoidRootPart") as Part;

export = class WalkCycleSprings {
    private spring: Spring = new Spring();
    private springCf: CFrame = new CFrame();

    public constructor(
        private cycleDamp: number,
        private movementDamp: number,
        private movementAngularDamp: number
    ) { }

    private GetCFrame(walkMovement: Vector3): CFrame {
        return new CFrame(
            walkMovement.X / this.movementDamp,
            walkMovement.Y / this.movementDamp,
            0
        );
    }

    private GetAngular(walkMovement: Vector3): CFrame {
        return CFrame.Angles(
            math.rad(walkMovement.Y / this.movementAngularDamp),
            math.rad(walkMovement.X / (this.movementAngularDamp / 6)),
            walkMovement.Z / (this.movementAngularDamp * 2)
        );
    }

    private GetCharacterVelocity(): Vector3 {
        return characterRoot.GetVelocityAtPosition(characterRoot.Position);
    }

    private GetCycleForce(dt: number): Vector3 {
        return new Vector3(
            WalkAnim.X.Update(dt),
            WalkAnim.Y.Update(dt),
            WalkAnim.Z.Update(dt)
        );
    }

    public Update(dt: number): CFrame {
        this.spring.Shove(
            this.GetCycleForce(dt)
                .div(this.cycleDamp)
                .mul(dt)
                .mul(60)
                .mul(this.GetCharacterVelocity().Magnitude)
        );

        const walkMovement: Vector3 = this.spring.Update(dt);
        return this.GetCFrame(walkMovement)
            .mul(this.GetAngular(walkMovement));
    }
}