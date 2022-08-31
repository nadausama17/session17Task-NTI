import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  userDetails:any;
  id:any;
  constructor(private _data:DataService,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params["id"];
    this.getUser(this.id);
  }

  getUser(id:any){
    this._data.getSingleUser(id).subscribe(
      data=> this.userDetails = data.data,
      e=> console.log(e),
      ()=>{}
    )
  }

}
