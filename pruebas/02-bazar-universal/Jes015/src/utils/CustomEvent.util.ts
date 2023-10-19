export class CommunicationEvent {
    private name: string

    constructor(name: string) {
        this.name = `custom:${name}`
    }

    public listenEvent (callback: (event: CustomEventInit) => unknown) {
        document.addEventListener(this.name, callback)
    }

    public sendMessage (payload: unknown) {
        const event = new CustomEvent(this.name, { detail: payload })
        document.dispatchEvent(event)
    }

    public clearEvent (callback: (event: CustomEventInit) => unknown) {
        document.removeEventListener(this.name, callback)
    }
}