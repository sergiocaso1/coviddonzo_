import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';
import { ServiceApiService } from './service-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service:ServiceApiService){

    this.chiamaApi()
  }
  title = 'prova-angular';

  showWord:string="";
  showPreWord:string=""

  Datasource:any={}
  dobe:any
  uri:string=""
  

  public chiamaApi(){
    this.service.getDatiApi().subscribe(res =>{
      console.log('res')
      console.log(res.results[0])
      this.Datasource=res.results[0]
     
      

      this.uri=this.Datasource.picture.large
      console.log(this.uri)
      this.showPreWord=""
      this.showWord=""
    })

  }
assegnaDataNascita(){
  this.showPreWord="Data Nascita :"
  let data=new Date(this.Datasource.dob.date)
  console.log(data.getFullYear())
this.showWord=String(data.getDate().toString()+"/"+String(data.getMonth())+"/"+data.getFullYear()) 

}

assegnaPassword(){
  this.showPreWord="Password :"
  this.showWord=this.Datasource.login.password;
}

assegnaNumeroTelefono(){
  this.showPreWord="NumeroTelefono :"
  this.showWord=this.Datasource.phone
}

assegnaIndirizzo(){
  this.showPreWord="Indirizzo :"
  this.showWord=this.Datasource.location.street.number+" "+this.Datasource.location.street.name
}

assegnaNome(){
  this.showPreWord="Nome :"
  this.showWord=this.Datasource.name.title+" "+this.Datasource.name.first+" "+this.Datasource.name.last
}

assegnaEmail(){
  this.showPreWord="Email :"
  this.showWord=this.Datasource.email
}
}
