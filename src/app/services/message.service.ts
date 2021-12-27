import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private subject = new BehaviorSubject<string>('');
  private message$ = this.subject.asObservable();

  getMessage(): Observable<string> {
    return this.message$;
  }

  sendMessage(message: string): void {
    this.subject.next(message);
  }
}
