import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { conferenciaListComponent } from './conferencia-list/conferencia-list.component';
import { conferenciaDetailComponent } from './conferencia-detail/conferencia-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [conferenciaListComponent],
  declarations: [conferenciaListComponent, conferenciaDetailComponent]
})
export class CAMBIARModule { }
