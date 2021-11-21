import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service-api.service';

@Component({
  selector: 'app-cerca-per-data',
  templateUrl: './cerca-per-data.component.html',
  styleUrls: ['./cerca-per-data.component.css']
})
export class CercaPerDataComponent implements OnInit {
  DatasourceFullRawGitHub: any = {};

  constructor(private service: ServiceApiService) { }

  ngOnInit(): void {

    this.service.getDatiFullRawGitHubApi().subscribe(res => {


      this.DatasourceFullRawGitHub = res
      console.log('storico')
      console.log(this.DatasourceFullRawGitHub)
    })
  }
  data: any
  prova!: any
oggetto:any
arrayy:any;
  ricercaBollettinoCovid() {
    let pro = new Date(this.data).toISOString()
    pro=pro.slice(0,10)
    
    this.prova=pro

   /* console.log(this.DatasourceFullRawGitHub[622].data.slice(0,10))
    console.log(pro)*/

    
     for(var i=this.DatasourceFullRawGitHub.length;i>0;i--)
    {

      
     if(this.DatasourceFullRawGitHub[i]?.data.slice(0,10)==pro){
       
       this.arrayy=this.DatasourceFullRawGitHub[i]
       console.log(this.arrayy)
     }
    } 
    this.oggetto=Object.keys(this.arrayy)
    console.log(this.oggetto)
    for (let obj of Object.keys(this.arrayy)) {
      console.log ('key: ' +  obj + ',  value: ' +this.arrayy[obj]);
    }


  }
}
