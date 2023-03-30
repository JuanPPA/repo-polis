import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Login } from './../../../core/class/login';
import * as XLSX from 'xlsx'
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

interface Task {
  title: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  dataSource: MatTableDataSource<any>; // YourType es el tipo de dato de su arreglo de registros
  displayedColumns = ['select', 'name', 'data'];
  selection = new SelectionModel<any>(true, []);

  logeo = new Login();
  public formGroup: FormGroup;

  // login = new Login();

  login:any = {
    correo:'',
    password:'',
    tipo:'',
  }

  constructor(
    private router: Router,
    private $snackbar: MatSnackBar,
    private formBuilder: FormBuilder,
    private $route: ActivatedRoute,

    
  ) { }


  ngOnInit() {
    
    }

    acceder():void{
      this.router.navigate(["/panel/bienvenido"], {relativeTo: this.$route});
    }
   
  }

