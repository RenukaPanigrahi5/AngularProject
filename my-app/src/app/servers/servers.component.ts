import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverCreationStatus = 'No Server created';
serverName = 'test';
serverCreated = false;
  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'server was created' + this.serverName;
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;

  }
}
