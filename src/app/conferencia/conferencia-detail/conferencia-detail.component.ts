import { Component, OnInit, Input } from '@angular/core';
import { conferencia } from '../conferencia';

@Component({
  selector: 'app-conferencia-detail',
  templateUrl: './conferencia-detail.component.html',
  styleUrls: ['./conferencia-detail.component.css']
})
export class conferenciaDetailComponent implements OnInit {

  @Input() conferenciadetail !: conferencia;

  constructor() { }

  ngOnInit() {
  }

}
