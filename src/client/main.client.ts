import { Carbon as Framework, Assets, Player, UI, Character  } from "shared/Carbon";
import { CameraAnimation } from "./classes/GameComponents/CameraAnimation";

const Carbon = new Framework(script);
const cameraAnimation = new CameraAnimation();
cameraAnimation.Start();