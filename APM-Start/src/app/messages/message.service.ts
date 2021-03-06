import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
    private messages: string[] = [];
    isDisplayed:boolean = false; 


    addMessage(message: string): void {
        let currentDate = new Date();
        this.messages.unshift(message + ' at ' + currentDate.toLocaleString());
    }
}
