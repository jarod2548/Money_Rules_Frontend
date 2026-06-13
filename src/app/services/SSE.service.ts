import { Injectable } from "@angular/core";
import {  BehaviorSubject } from "rxjs";
import { BudgetMelding } from "../models/meldingen/BudgetMelding";
import { SSEMessage } from "../models/meldingen/SSEMessage";
@Injectable({ providedIn: 'root' })
export class SSEService {

    private eventSource?: EventSource;

  
  private messages: SSEMessage[] = [];
  private messagesSubject = new BehaviorSubject<SSEMessage[]>([]);
  messages$ = this.messagesSubject.asObservable();



  connect(): void {

        if (this.eventSource) return;

      this.eventSource = new EventSource('/sse/user/subscribe', {
        withCredentials: true 
      });

      this.eventSource.addEventListener('budget-melding', (event: MessageEvent) => {
        try{
            const raw = JSON.parse(event.data);
            const message: SSEMessage = {
          type: 'budget-melding',
          data: BudgetMelding.fromJson(raw)
        };
        this.addMessage(message);
        }catch(err){
          console.log(err);
        }
        
    });

      this.eventSource.onerror = (error) => {
        console.log(error);
      };

      
    };

    private addMessage(message: SSEMessage): void {
    this.messages.unshift(message); 
    this.messagesSubject.next([...this.messages]);
  }
  
  disconnect() {
    this.eventSource?.close();
    this.eventSource = undefined;
  }


}