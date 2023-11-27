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

  onSelected(conferencia: conferencia): void {
    this.selected = true;
    this.selectedconferencia = conferencia;
  }

  conferencias : Array<conferencia>=[];
  
  constructor( private conferenciaService: conferenciaService) { }

  numUpcoming: number = 0;
  current: Date = new Date();

  getconferencias(): void {
    this.conferenciaService.getconferencias().subscribe(conferencias => 
      {this.conferencias = conferencias
      this.upcoming(); 
  });
   
  }

  upcoming(): number {
    for (let c of this.conferencias) {
      if (new Date(c.starts) > this.current) {
        this.numUpcoming = this.numUpcoming + 1;
      }
    }
    return this.numUpcoming;
  }

  ngOnInit() {
    this.getconferencias();
  }

}
