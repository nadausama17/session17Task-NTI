import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any[] = [];
  constructor(private _data:DataService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this._data.getAllUsers().subscribe(
      data=> this.users=data.data,
      e=>console.log(e),
      ()=>{}
    )
  }

}
