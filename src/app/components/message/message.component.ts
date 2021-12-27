import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  message$?: Observable<string>;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.message$ = this.messageService.getMessage();
  }
}
