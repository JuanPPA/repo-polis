import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderI, LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  loader$   : Subject<LoaderI> = this.loaderService.loader$;
  isLoading : boolean = false;
  text      : string = '';

  constructor(private loaderService: LoaderService,
              private changeDR: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loader$.subscribe(loader => {
      this.isLoading = loader.status;
      this.text = loader.texto;
      this.changeDR.detectChanges();
    });
  }

}
