export abstract class Component {
    public abstract Start?: Callback;
    public abstract Stop?: Callback;
    public abstract Update?: Callback;
}