import { multi,single, multi3, single4} from './../administradores/data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo-panel',
  templateUrl: './saludo-panel.component.html',
  styleUrls: ['./saludo-panel.component.css']
})
export class SaludoPanelComponent implements OnInit {

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
    Object.assign(this, { multi });
    Object.assign(this, { single });
    Object.assign(this, { multi3 });
    Object.assign(this, { single4 });


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

  ////////////////////////////
  single: any[];
  view1: any[] = [700, 400];

  // options
  gradient1: boolean = true;
  showLegend1: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme1 = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  onSelect1(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate1(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate1(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }



  //PARTE 3
  
  multi3: any[];
  view3: any[] = [700, 400];

  // options
  showXAxis3: boolean = true;
  showYAxis3: boolean = true;
  gradient3: boolean = false;
  showLegend3: boolean = true;
  legendPosition3: string = 'below';
  showXAxisLabel3: boolean = true;
  yAxisLabel3: string = 'Country';
  showYAxisLabel3: boolean = true;
  xAxisLabel3 = 'Population';

  colorScheme3 = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };
  schemeType: string = 'linear';


  onSelect3(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate3(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate3(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  //PARTE 4

  single4: any[];
  view4: any[] = [500, 400];

  // options
  showLegend4: boolean = true;
  showLabels4: boolean = true;

  colorScheme4 = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };



  onSelect4(event) {
    console.log(event);
  }
}