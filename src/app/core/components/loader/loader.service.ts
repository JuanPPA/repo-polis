import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface LoaderI {
    status: boolean;
    texto?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
    loader$ = new Subject<LoaderI>();
    loader: LoaderI = {
        status: false,
        texto : ""
    }

    show(texto?: string): void {
        this.loader.status = true;
        this.loader.texto = (texto) ? (texto) : "";
        this.loader$.next(this.loader);
    }

    hide(): void {
        this.loader.status = false;
        this.loader.texto = ""
        this.loader$.next(this.loader);
    }

}
