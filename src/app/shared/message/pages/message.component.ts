import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  @Input()
  title: string = 'Mensajes';

  openMessage: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  eventCloseMessage() {
    this.openMessage = false;
  }
}
