import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {

  id!: number;
  name!: String;
  channel!: String;
  season!: number;
  description!: String;
  webpage!: String;
  poster!: String;

  constructor(){
    this.id;
    this.name;
    this.channel;
    this.season;
    this.description;
    this.webpage;
    this.poster;
  }

  ngOnInit(): void{
    console.log("Serie cargada")
  }

  aumentarId(){
    this.id++;
  }
}

