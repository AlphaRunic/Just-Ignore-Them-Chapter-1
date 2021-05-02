import { Carbon as Framework } from "shared/Carbon";
import { CameraAnimation } from "./classes/GameComponents/CameraAnimation";
import { ViewModel } from "./classes/GameComponents/ViewModel";

const Carbon = new Framework(script);

Carbon.RunComponents([
    new CameraAnimation(),
    new ViewModel()
]);