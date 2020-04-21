import { Component, OnInit } from '@angular/core';
//imposta il component per ricevere input
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

//questa annotazione indica che la classe è un componente
@Component({
  //selector identifica il component
  selector: 'app-product-alerts',
  //i due seguenti fanno riferimento ai file html e css
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
//questa classe gestisce le funzionalità per il component
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}