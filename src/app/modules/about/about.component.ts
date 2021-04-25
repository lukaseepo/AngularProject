import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  id =this.router.snapshot.params.id;

  
  list=[{
    id:1,
    name:'Girogi'
  },{
    id:2,
    name:'Tornike'
  },
  {
    id:3,
    name:'Nika'
  },
  {
    id:4,
    name:'Luka'
  }]
  constructor(private router: ActivatedRoute ) {}


  getId(){
    for(let i=0; i<this.list.length;i++){
      if(this.list[i].id===this.id){
        console.log(this.list[i]);
      }
    }
  }

  ngOnInit(): void {
    this.getId();
  }
}
