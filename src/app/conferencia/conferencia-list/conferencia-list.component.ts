import { Component, OnInit } from '@angular/core';
import { conferencia } from '../conferencia';
import { conferenciaService } from '../conferencia.service';

@Component({
  selector: 'app-conferencia-list',
  templateUrl: './conferencia-list.component.html',
  styleUrls: ['./conferencia-list.component.css']
})
export class conferenciaListComponent implements OnInit {

  selectedconferencia !: conferencia;
  selected = false;

  onselect(conferencia: conferencia): void {
    this.selected = true;
    this.selectedconferencia = conferencia;
  }

  conferencias : Array<conferencia>=[];
  constructor( private conferenciaService: conferenciaService) { }

  getconferencias(): void {
    this.conferenciaService.getconferencias().subscribe(conferencias => this.conferencias = conferencias);
  }

  ngOnInit() {
    this.getconferencias();
  }

}
