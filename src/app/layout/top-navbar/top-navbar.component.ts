import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from '../../Auth/login/login.component';
@Component({
  selector: 'top-navbar',
  standalone: true,
  imports: [RouterLink,MatDialogModule ],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.scss'
})
export class TopNavbarComponent {

  constructor(
    private router:Router,
    private model:MatDialog
  ){

  }


  gotoLogIn(){
   const dialogRef = this.model.open(LoginComponent, {
     disableClose:true,
     width:'700px'
   });
   dialogRef.afterClosed().subscribe((result:Boolean)=>{

   })
  }
}
