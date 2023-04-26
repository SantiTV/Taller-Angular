import { Serie } from '../serie';
import { SeriesService } from '../series.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];

  constructor(private seriesService: SeriesService) { }

  getSeries(): void {
    this.seriesService.getBooks().subscribe((series) => {
      this.series = series;
    });
  }

  ngOnInit() {
    this.getSeries();
  }

}
