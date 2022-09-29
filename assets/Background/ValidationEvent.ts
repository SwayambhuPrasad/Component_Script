import { _decorator, Component, Node, Event } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ValidationEvent')
export class ValidationEvent extends Event {
    
    static TYPE = "check-status";
    isCorrect = false;
    
    constructor(bubbles?: boolean, data?: boolean) {
        // @ts-ignore
        super(ValidationEvent.TYPE, bubbles);
        if (data != null) this.isCorrect = data
    }
}


