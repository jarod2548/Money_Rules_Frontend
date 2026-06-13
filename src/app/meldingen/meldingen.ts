import { Component } from '@angular/core';
import { SSEService } from '../services/SSE.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-meldingen',
  imports: [AsyncPipe],
  templateUrl: './meldingen.html',
  styleUrl: './meldingen.css',
})
export class Meldingen {

  constructor(public sseService: SSEService) {}

}
