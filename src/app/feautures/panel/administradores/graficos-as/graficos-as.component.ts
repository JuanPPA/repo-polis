import { Component, OnInit } from '@angular/core';
import { multi } from '../data';

@Component({
  selector: 'app-graficos-as',
  templateUrl: './graficos-as.component.html',
  styleUrls: ['./graficos-as.component.css']
})
export class GraficosAsComponent implements OnInit {

  ngOnInit(): void {
  }
  multi: any[];
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true; 
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Febrero';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Population';
  legendTitle: string = 'Datos';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { multi })
  }

 onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}