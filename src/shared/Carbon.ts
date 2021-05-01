import { Players, ReplicatedStorage, Workspace, RunService as Runtime } from "@rbxts/services";
import { Network, NetworkType } from "shared/Network";

const Camera = Workspace.CurrentCamera as Camera;
const Assets = ReplicatedStorage.WaitForChild("Assets") as Folder;
const Player: Player = Players.LocalPlayer;
let Character: Model;
let UI: PlayerGui;

if (Player) {
    Character = Player.Character || Player.CharacterAdded.Wait()[0];
    UI = Player.WaitForChild("PlayerGui") as PlayerGui;
}

export type NullishInstance = 
    | Instance
    | undefined;

export type NullishBoolean =
    | boolean
    | undefined;

export type NullishModel = 
    | Model 
    | undefined;

export class Carbon {
    public Render: RBXScriptSignal = Runtime.RenderStepped;
    public Update: RBXScriptSignal = Runtime.Heartbeat;
    public Network: Network;
    public NetworkType: NetworkType;

    public constructor(s: LuaSourceContainer) {
        const networkType: NetworkType = 
            s.ClassName === "Script" ? 
            NetworkType.Server : NetworkType.Client;
        
        this.Network = new Network(networkType);
        this.NetworkType = networkType;
    }
}

export { Assets, Player, Character, UI, Camera };