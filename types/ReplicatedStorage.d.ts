interface ReplicatedStorage extends Instance {
	TS: Folder & {
		classes: Folder & {
			DataBase: ModuleScript;
			Wave: ModuleScript;
			Exception: ModuleScript;
			Thread: ModuleScript;
		};
		Network: ModuleScript;
		Carbon: ModuleScript;
	};
	Assets: Folder & {
		Flashlight: Model & {
			["Oval Mesh"]: Part & {
				SpotLight: SpotLight;
				Mesh: SpecialMesh;
				light: Beam;
			};
			MeshPart: MeshPart & {
				SurfaceAppearance: SurfaceAppearance;
				["Oval Mesh"]: Weld;
			};
		};
		ViewModel: Model & {
			AnimationController: AnimationController & {
				Animator: Animator;
			};
			Animations: Folder & {
				OpenDoor: Animation;
				Idle: Animation;
				Run: Animation;
				Walk: Animation;
			};
			Clotch: MeshPart & {
				ClotchMotor6D: Motor6D;
				SurfaceAppearance: SurfaceAppearance;
			};
			RootPart: Part & {
				["Showlder.L"]: Bone & {
					["Armup.L"]: Bone & {
						["Armmid.L"]: Bone & {
							["Armlow.L"]: Bone & {
								["Mini.L"]: Bone & {
									["Mini1.L"]: Bone & {
										["Mini2.L"]: Bone & {
											["Mini3.L"]: Bone;
										};
									};
								};
								["Middle.L"]: Bone & {
									["Middle1.L"]: Bone & {
										["Middle2.L"]: Bone & {
											["Middle3.L"]: Bone;
										};
									};
								};
								["Big.L"]: Bone & {
									["Big1.L"]: Bone & {
										["Big2.L"]: Bone;
									};
								};
								["Noname.L"]: Bone & {
									["Noname1.L"]: Bone & {
										["Noname2.L"]: Bone & {
											["Noname3.L"]: Bone;
										};
									};
								};
								["Point.L"]: Bone & {
									["Point1.L"]: Bone & {
										["Point2.L"]: Bone & {
											["Point3.L"]: Bone;
										};
									};
								};
							};
						};
					};
				};
				["Showlder.R"]: Bone & {
					["Armup.R"]: Bone & {
						["Armmid.R"]: Bone & {
							["Armlow.R"]: Bone & {
								["Mini.R"]: Bone & {
									["Mini1.R"]: Bone & {
										["Mini2.R"]: Bone & {
											["Mini3.R"]: Bone;
										};
									};
								};
								["Middle.R"]: Bone & {
									["Middle1.R"]: Bone & {
										["Middle2.R"]: Bone & {
											["Middle3.R"]: Bone;
										};
									};
								};
								["Big.R"]: Bone & {
									["Big1.R"]: Bone & {
										["Big2.R"]: Bone;
									};
								};
								["Noname.R"]: Bone & {
									["Noname1.R"]: Bone & {
										["Noname2.R"]: Bone & {
											["Noname3.R"]: Bone;
										};
									};
								};
								["Point.R"]: Bone & {
									["Point1.R"]: Bone & {
										["Point2.R"]: Bone & {
											["Point3.R"]: Bone;
										};
									};
								};
							};
						};
					};
				};
			};
			Hand: MeshPart & {
				HandMotor6D: Motor6D;
				SurfaceAppearance: SurfaceAppearance;
			};
		};
	};
	Network: Folder;
	rbxts_include: Folder & {
		RuntimeLib: ModuleScript;
		Promise: ModuleScript;
		node_modules: Folder & {
			datastore2: Folder & {
				src: ModuleScript & {
					Verifier: ModuleScript;
					Promise: ModuleScript;
					SavingMethods: ModuleScript & {
						OrderedBackups: ModuleScript;
						Standard: ModuleScript;
					};
					Settings: ModuleScript;
					TableUtil: ModuleScript;
					Constants: ModuleScript;
				};
			};
			abbreviate: Folder & {
				src: ModuleScript & {
					commify: ModuleScript;
					numberToString: ModuleScript;
					setSetting: ModuleScript;
					numbersToSortedString: ModuleScript;
					stringToNumber: ModuleScript;
				};
			};
			services: ModuleScript;
			device: Folder & {
				out: ModuleScript & {
					Device: ModuleScript;
				};
			};
			["compiler-types"]: Folder & {
				types: Folder;
			};
			eventemitter: Folder & {
				out: ModuleScript & {
					bindableEmitter: ModuleScript;
				};
			};
			["camera-shaker"]: Folder & {
				CameraShaker: ModuleScript & {
					CameraShakeInstance: ModuleScript;
					CameraShakePresets: ModuleScript;
				};
			};
			["character-viewport"]: Folder & {
				out: ModuleScript;
			};
			roact: Folder & {
				src: ModuleScript & {
					createSpy: ModuleScript;
					createElement: ModuleScript;
					oneChild: ModuleScript;
					RobloxRenderer: ModuleScript;
					createSignal: ModuleScript;
					assertDeepEqual: ModuleScript;
					getDefaultInstanceProperty: ModuleScript;
					invalidSetStateMessages: ModuleScript;
					Binding: ModuleScript;
					internalAssert: ModuleScript;
					NoopRenderer: ModuleScript;
					createReconciler: ModuleScript;
					GlobalConfig: ModuleScript;
					strict: ModuleScript;
					createReconcilerCompat: ModuleScript;
					assign: ModuleScript;
					createRef: ModuleScript;
					Type: ModuleScript;
					Portal: ModuleScript;
					Symbol: ModuleScript;
					PropMarkers: Folder & {
						Ref: ModuleScript;
						Change: ModuleScript;
						Children: ModuleScript;
						Event: ModuleScript;
					};
					createContext: ModuleScript;
					createFragment: ModuleScript;
					ElementUtils: ModuleScript;
					ComponentLifecyclePhase: ModuleScript;
					Config: ModuleScript;
					ElementKind: ModuleScript;
					PureComponent: ModuleScript;
					Logging: ModuleScript;
					Component: ModuleScript;
					SingleEventManager: ModuleScript;
					None: ModuleScript;
				};
			};
			["fast-wait"]: Folder & {
				src: ModuleScript;
				out: ModuleScript;
			};
			types: Folder & {
				include: Folder & {
					generated: Folder;
				};
			};
		};
	};
}
