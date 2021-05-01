interface StarterPlayer extends Instance {
	StarterCharacter: Model & {
		LeftLowerArm: MeshPart & {
			LeftElbowRigAttachment: Attachment;
			LeftElbow: Motor6D;
			AvatarPartScaleType: StringValue;
			LeftWristRigAttachment: Attachment;
		};
		LeftFoot: MeshPart & {
			AvatarPartScaleType: StringValue;
			LeftAnkle: Motor6D;
			LeftAnkleRigAttachment: Attachment;
			LeftFootAttachment: Attachment;
		};
		RightHand: MeshPart & {
			RightWristRigAttachment: Attachment;
			RightWrist: Motor6D;
			RightGripAttachment: Attachment;
			AvatarPartScaleType: StringValue;
		};
		HumanoidRootPart: Part & {
			RootRigAttachment: Attachment & {
				OriginalPosition: Vector3Value;
			};
			OriginalSize: Vector3Value;
		};
		RightLowerLeg: MeshPart & {
			RightKneeRigAttachment: Attachment;
			RightAnkleRigAttachment: Attachment;
			RightKnee: Motor6D;
			AvatarPartScaleType: StringValue;
		};
		LeftUpperLeg: MeshPart & {
			AvatarPartScaleType: StringValue;
			LeftHip: Motor6D;
			LeftHipRigAttachment: Attachment;
			LeftKneeRigAttachment: Attachment;
		};
		LeftLowerLeg: MeshPart & {
			AvatarPartScaleType: StringValue;
			LeftKnee: Motor6D;
			LeftAnkleRigAttachment: Attachment;
			LeftKneeRigAttachment: Attachment;
		};
		RightUpperArm: MeshPart & {
			RightElbowRigAttachment: Attachment;
			RightShoulder: Motor6D;
			RightShoulderRigAttachment: Attachment;
			RightShoulderAttachment: Attachment;
			AvatarPartScaleType: StringValue;
		};
		Head: MeshPart & {
			HatAttachment: Attachment;
			AvatarPartScaleType: StringValue;
			NeckRigAttachment: Attachment;
			HairAttachment: Attachment;
			Neck: Motor6D;
			FaceFrontAttachment: Attachment;
			FaceCenterAttachment: Attachment;
		};
		UpperTorso: MeshPart & {
			RightCollarAttachment: Attachment;
			BodyBackAttachment: Attachment;
			NeckRigAttachment: Attachment;
			LeftCollarAttachment: Attachment;
			AvatarPartScaleType: StringValue;
			Waist: Motor6D;
			LeftShoulderRigAttachment: Attachment;
			BodyFrontAttachment: Attachment;
			WaistRigAttachment: Attachment;
			RightShoulderRigAttachment: Attachment;
			NeckAttachment: Attachment;
		};
		LeftUpperArm: MeshPart & {
			LeftShoulderRigAttachment: Attachment;
			LeftShoulder: Motor6D;
			LeftShoulderAttachment: Attachment;
			LeftElbowRigAttachment: Attachment;
			AvatarPartScaleType: StringValue;
		};
		RightLowerArm: MeshPart & {
			RightWristRigAttachment: Attachment;
			AvatarPartScaleType: StringValue;
			RightElbow: Motor6D;
			RightElbowRigAttachment: Attachment;
		};
		LeftHand: MeshPart & {
			LeftWrist: Motor6D;
			LeftGripAttachment: Attachment;
			AvatarPartScaleType: StringValue;
			LeftWristRigAttachment: Attachment;
		};
		Animate: Script & {
			idle: StringValue & {
				Animation2: Animation & {
					Weight: NumberValue;
				};
				Animation1: Animation & {
					Weight: NumberValue;
				};
			};
			climb: StringValue & {
				ClimbAnim: Animation;
			};
			sit: StringValue & {
				SitAnim: Animation;
			};
			msg: StringValue;
			run: StringValue & {
				RunAnim: Animation;
			};
			swim: StringValue & {
				Swim: Animation;
			};
			swimidle: StringValue & {
				SwimIdle: Animation;
			};
			jump: StringValue & {
				JumpAnim: Animation;
			};
			fall: StringValue & {
				FallAnim: Animation;
			};
			toolnone: StringValue & {
				ToolNoneAnim: Animation;
			};
			walk: StringValue & {
				RunAnim: Animation;
			};
		};
		Humanoid: Humanoid & {
			Animator: Animator;
		};
		LowerTorso: MeshPart & {
			WaistCenterAttachment: Attachment;
			LeftHipRigAttachment: Attachment;
			Root: Motor6D;
			RootRigAttachment: Attachment;
			RightHipRigAttachment: Attachment;
			AvatarPartScaleType: StringValue;
			WaistBackAttachment: Attachment;
			WaistRigAttachment: Attachment;
			WaistFrontAttachment: Attachment;
		};
		RightUpperLeg: MeshPart & {
			RightKneeRigAttachment: Attachment;
			AvatarPartScaleType: StringValue;
			RightHip: Motor6D;
			RightHipRigAttachment: Attachment;
		};
		RightFoot: MeshPart & {
			RightFootAttachment: Attachment;
			RightAnkleRigAttachment: Attachment;
			RightAnkle: Motor6D;
			AvatarPartScaleType: StringValue;
		};
	};
	StarterPlayerScripts: StarterPlayerScripts & {
		TS: Folder & {
			classes: Folder & {
				UI: ModuleScript;
				Tweenable: ModuleScript;
				LoadBar: ModuleScript;
			};
			main: LocalScript;
		};
	};
	StarterCharacterScripts: StarterCharacterScripts;
}
