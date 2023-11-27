import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class HomeComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private router: Router) { 

  }

  ngOnInit(): void {
  }

  selectNetwork(path:string){
    this.confirmationService.confirm({
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Network', detail: 'You have selected Klaytn'});
        this.router.navigate([`/${path}/klaytn`]);
      },
      reject: () => {
        this.messageService.add({ severity: 'info', summary: 'Network', detail: 'You have selected Lukso'});
        this.router.navigate([`/${path}/lukso`]);
      }
    })
  }

}
