interface Workspace extends Model {
	FBXImportGeneric: Model & {
		Clotch: MeshPart & {
			ClotchMotor6D: Motor6D;
			SurfaceAppearance: SurfaceAppearance;
		};
		CamTemplate: Part;
		AnimSaves: Model & {
			["Imported Animation Clip"]: KeyframeSequence & {
				End: Keyframe & {
					RootNode: Pose;
					RootPart: Pose & {
						["Showlder.L"]: Pose & {
							["Armup.L"]: Pose & {
								["Armmid.L"]: Pose & {
									["Armlow.L"]: Pose & {
										["Mini.L"]: Pose & {
											["Mini1.L"]: Pose & {
												["Mini2.L"]: Pose & {
													["Mini3.L"]: Pose;
												};
											};
										};
										["Middle.L"]: Pose & {
											["Middle1.L"]: Pose & {
												["Middle2.L"]: Pose & {
													["Middle3.L"]: Pose;
												};
											};
										};
										["Big.L"]: Pose & {
											["Big1.L"]: Pose & {
												["Big2.L"]: Pose;
											};
										};
										["Noname.L"]: Pose & {
											["Noname1.L"]: Pose & {
												["Noname2.L"]: Pose & {
													["Noname3.L"]: Pose;
												};
											};
										};
										["Point.L"]: Pose & {
											["Point1.L"]: Pose & {
												["Point2.L"]: Pose & {
													["Point3.L"]: Pose;
												};
											};
										};
									};
								};
							};
						};
						["Showlder.R"]: Pose & {
							["Armup.R"]: Pose & {
								["Armmid.R"]: Pose & {
									["Armlow.R"]: Pose & {
										["Point.R"]: Pose & {
											["Point1.R"]: Pose & {
												["Point2.R"]: Pose & {
													["Point3.R"]: Pose;
												};
											};
										};
										["Middle.R"]: Pose & {
											["Middle1.R"]: Pose & {
												["Middle2.R"]: Pose & {
													["Middle3.R"]: Pose;
												};
											};
										};
										["Big.R"]: Pose & {
											["Big1.R"]: Pose & {
												["Big2.R"]: Pose;
											};
										};
										["Noname.R"]: Pose & {
											["Noname1.R"]: Pose & {
												["Noname2.R"]: Pose & {
													["Noname3.R"]: Pose;
												};
											};
										};
										["Mini.R"]: Pose & {
											["Mini1.R"]: Pose & {
												["Mini2.R"]: Pose & {
													["Mini3.R"]: Pose;
												};
											};
										};
									};
								};
							};
						};
					};
					Armature: Pose;
				};
			};
			["Automatic Save"]: KeyframeSequence & {
				End: Keyframe & {
					RootNode: Pose;
					RootPart: Pose & {
						["Showlder.L"]: Pose & {
							["Armup.L"]: Pose & {
								["Armmid.L"]: Pose & {
									["Armlow.L"]: Pose & {
										["Point.L"]: Pose & {
											["Point1.L"]: Pose & {
												["Point2.L"]: Pose & {
													["Point3.L"]: Pose;
												};
											};
										};
										["Middle.L"]: Pose & {
											["Middle1.L"]: Pose & {
												["Middle2.L"]: Pose & {
													["Middle3.L"]: Pose;
												};
											};
										};
										["Big.L"]: Pose & {
											["Big1.L"]: Pose & {
												["Big2.L"]: Pose;
											};
										};
										["Noname.L"]: Pose & {
											["Noname1.L"]: Pose & {
												["Noname2.L"]: Pose & {
													["Noname3.L"]: Pose;
												};
											};
										};
										["Mini.L"]: Pose & {
											["Mini1.L"]: Pose & {
												["Mini2.L"]: Pose & {
													["Mini3.L"]: Pose;
												};
											};
										};
									};
								};
							};
						};
						["Showlder.R"]: Pose & {
							["Armup.R"]: Pose & {
								["Armmid.R"]: Pose & {
									["Armlow.R"]: Pose & {
										["Mini.R"]: Pose & {
											["Mini1.R"]: Pose & {
												["Mini2.R"]: Pose & {
													["Mini3.R"]: Pose;
												};
											};
										};
										["Middle.R"]: Pose & {
											["Middle1.R"]: Pose & {
												["Middle2.R"]: Pose & {
													["Middle3.R"]: Pose;
												};
											};
										};
										["Big.R"]: Pose & {
											["Big1.R"]: Pose & {
												["Big2.R"]: Pose;
											};
										};
										["Noname.R"]: Pose & {
											["Noname1.R"]: Pose & {
												["Noname2.R"]: Pose & {
													["Noname3.R"]: Pose;
												};
											};
										};
										["Point.R"]: Pose & {
											["Point1.R"]: Pose & {
												["Point2.R"]: Pose & {
													["Point3.R"]: Pose;
												};
											};
										};
									};
								};
							};
						};
					};
					Armature: Pose;
				};
			};
		};
		AnimationController: AnimationController & {
			Animator: Animator;
		};
		Hand: MeshPart & {
			HandMotor6D: Motor6D;
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
		InitialPoses: Folder & {
			["Big.R_Original"]: CFrameValue;
			["Middle3.R_Composited"]: CFrameValue;
			["Big2.R_Composited"]: CFrameValue;
			Armature_Initial: CFrameValue;
			["Noname3.L_Initial"]: CFrameValue;
			["Middle2.R_Initial"]: CFrameValue;
			["Big1.R_Original"]: CFrameValue;
			["Big1.L_Original"]: CFrameValue;
			["Noname.R_Initial"]: CFrameValue;
			["Noname1.L_Initial"]: CFrameValue;
			["Big.L_Composited"]: CFrameValue;
			["Point1.R_Initial"]: CFrameValue;
			["Point3.R_Initial"]: CFrameValue;
			["Middle2.L_Original"]: CFrameValue;
			["Middle3.L_Composited"]: CFrameValue;
			["Armlow.L_Original"]: CFrameValue;
			["Noname.L_Composited"]: CFrameValue;
			["Armmid.L_Composited"]: CFrameValue;
			["Showlder.L_Initial"]: CFrameValue;
			["Noname.L_Initial"]: CFrameValue;
			["Point.L_Initial"]: CFrameValue;
			["Noname1.L_Original"]: CFrameValue;
			["Mini3.L_Composited"]: CFrameValue;
			["Mini2.R_Composited"]: CFrameValue;
			["Armmid.L_Initial"]: CFrameValue;
			["Point2.R_Initial"]: CFrameValue;
			["Armmid.R_Composited"]: CFrameValue;
			["Noname3.R_Composited"]: CFrameValue;
			["Point.R_Original"]: CFrameValue;
			["Showlder.R_Composited"]: CFrameValue;
			["Mini3.R_Original"]: CFrameValue;
			["Big2.L_Composited"]: CFrameValue;
			["Armlow.R_Initial"]: CFrameValue;
			["Mini1.L_Initial"]: CFrameValue;
			["Point2.R_Original"]: CFrameValue;
			["Mini.R_Initial"]: CFrameValue;
			["Middle2.R_Composited"]: CFrameValue;
			["Noname2.L_Initial"]: CFrameValue;
			["Armlow.L_Composited"]: CFrameValue;
			["Mini3.R_Initial"]: CFrameValue;
			["Middle2.L_Initial"]: CFrameValue;
			Clotch_Initial: CFrameValue;
			["Big1.R_Initial"]: CFrameValue;
			["Point1.L_Original"]: CFrameValue;
			["Point2.L_Composited"]: CFrameValue;
			["Big.L_Initial"]: CFrameValue;
			["Point.R_Initial"]: CFrameValue;
			["Mini.R_Original"]: CFrameValue;
			["Noname3.R_Initial"]: CFrameValue;
			["Middle1.R_Original"]: CFrameValue;
			["Armlow.R_Original"]: CFrameValue;
			["Noname2.R_Original"]: CFrameValue;
			["Big2.L_Original"]: CFrameValue;
			["Noname.R_Composited"]: CFrameValue;
			Hand_Composited: CFrameValue;
			["Showlder.R_Initial"]: CFrameValue;
			["Armup.L_Composited"]: CFrameValue;
			["Showlder.L_Composited"]: CFrameValue;
			["Mini.L_Composited"]: CFrameValue;
			["Middle.L_Initial"]: CFrameValue;
			["Mini2.L_Initial"]: CFrameValue;
			["Big.L_Original"]: CFrameValue;
			["Armmid.L_Original"]: CFrameValue;
			["Armup.L_Original"]: CFrameValue;
			["Noname1.R_Composited"]: CFrameValue;
			["Noname.L_Original"]: CFrameValue;
			["Big2.R_Original"]: CFrameValue;
			["Noname2.L_Composited"]: CFrameValue;
			Armature_Original: CFrameValue;
			["Point3.L_Initial"]: CFrameValue;
			["Point2.L_Initial"]: CFrameValue;
			["Middle2.L_Composited"]: CFrameValue;
			["Mini1.R_Initial"]: CFrameValue;
			["Noname.R_Original"]: CFrameValue;
			["Point3.R_Original"]: CFrameValue;
			["Mini1.R_Composited"]: CFrameValue;
			["Middle3.L_Original"]: CFrameValue;
			["Middle1.L_Original"]: CFrameValue;
			["Big1.R_Composited"]: CFrameValue;
			["Armmid.R_Original"]: CFrameValue;
			["Point2.R_Composited"]: CFrameValue;
			["Noname1.L_Composited"]: CFrameValue;
			["Noname1.R_Initial"]: CFrameValue;
			["Showlder.R_Original"]: CFrameValue;
			["Mini2.R_Original"]: CFrameValue;
			["Armlow.R_Composited"]: CFrameValue;
			["Mini1.R_Original"]: CFrameValue;
			["Noname1.R_Original"]: CFrameValue;
			["Noname3.R_Original"]: CFrameValue;
			["Point.L_Composited"]: CFrameValue;
			["Showlder.L_Original"]: CFrameValue;
			["Point2.L_Original"]: CFrameValue;
			["Middle2.R_Original"]: CFrameValue;
			["Big1.L_Composited"]: CFrameValue;
			["Middle.L_Composited"]: CFrameValue;
			Hand_Original: CFrameValue;
			Clotch_Original: CFrameValue;
			Clotch_Composited: CFrameValue;
			["Mini3.L_Original"]: CFrameValue;
			["Big2.L_Initial"]: CFrameValue;
			["Middle.L_Original"]: CFrameValue;
			Hand_Initial: CFrameValue;
			["Mini3.L_Initial"]: CFrameValue;
			["Mini2.L_Original"]: CFrameValue;
			["Mini2.L_Composited"]: CFrameValue;
			["Mini1.L_Original"]: CFrameValue;
			["Middle3.R_Original"]: CFrameValue;
			["Middle.R_Original"]: CFrameValue;
			["Armup.R_Composited"]: CFrameValue;
			["Big.R_Composited"]: CFrameValue;
			["Mini1.L_Composited"]: CFrameValue;
			["Point1.R_Original"]: CFrameValue;
			["Mini.L_Initial"]: CFrameValue;
			["Point3.L_Composited"]: CFrameValue;
			["Middle.R_Composited"]: CFrameValue;
			["Mini.L_Original"]: CFrameValue;
			["Point3.R_Composited"]: CFrameValue;
			["Noname3.L_Original"]: CFrameValue;
			["Point1.L_Initial"]: CFrameValue;
			["Armmid.R_Initial"]: CFrameValue;
			["Middle1.L_Composited"]: CFrameValue;
			["Mini.R_Composited"]: CFrameValue;
			["Mini2.R_Initial"]: CFrameValue;
			["Noname3.L_Composited"]: CFrameValue;
			["Noname2.R_Initial"]: CFrameValue;
			["Noname2.L_Original"]: CFrameValue;
			Armature_Composited: CFrameValue;
			["Big.R_Initial"]: CFrameValue;
			["Armup.L_Initial"]: CFrameValue;
			["Mini3.R_Composited"]: CFrameValue;
			["Point1.R_Composited"]: CFrameValue;
			["Point.R_Composited"]: CFrameValue;
			["Middle3.L_Initial"]: CFrameValue;
			["Armup.R_Initial"]: CFrameValue;
			["Point.L_Original"]: CFrameValue;
			["Middle1.L_Initial"]: CFrameValue;
			["Middle.R_Initial"]: CFrameValue;
			["Noname2.R_Composited"]: CFrameValue;
			["Big1.L_Initial"]: CFrameValue;
			["Point3.L_Original"]: CFrameValue;
			["Big2.R_Initial"]: CFrameValue;
			["Armlow.L_Initial"]: CFrameValue;
			["Middle1.R_Initial"]: CFrameValue;
			["Point1.L_Composited"]: CFrameValue;
			["Middle3.R_Initial"]: CFrameValue;
			["Armup.R_Original"]: CFrameValue;
			["Middle1.R_Composited"]: CFrameValue;
		};
	};
	Baseplate: Part & {
		Texture: Texture;
	};
	light1: Part;
	SpawnLocation: SpawnLocation;
	Camera: Camera;
}
