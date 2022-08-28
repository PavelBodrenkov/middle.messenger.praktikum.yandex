export class EventBus {
    private readonly listeners: Record<string, Array<() => void>> = {};

    on(event: any, callback: any) {
        if(!this.listeners[event]) {
            this.listeners[event] = []
        }

        this.listeners[event].push(callback)
    }

    off(event:any, callback:any) {
        if(!this.listeners[event]) {
            throw new Error(`Нет событий ${event}`);
        }
        this.listeners[event] = this.listeners[event].filter(listener => listener !== callback)
    }

    emit(event:any, ...args:any) {
        if(!this.listeners[event]) {
            throw new Error(`Нет событий ${event}`);
        }

        this.listeners[event].forEach((listener:any) => {
            listener(...args)
        })
    }
}