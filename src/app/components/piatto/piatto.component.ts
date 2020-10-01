import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Piatto } from 'src/app/model/Dishes';

@Component({
  selector: 'app-piatto',
  templateUrl: './piatto.component.html',
  styleUrls: ['./piatto.component.css']
})
export class PiattoComponent  {
  @Input() piatto: Piatto
  
  constructor() {
   }
}
