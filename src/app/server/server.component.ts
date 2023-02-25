import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  severId: number = 10;
  severStatus: string = 'offline';

  getServerStatus() {
    return this.severStatus;
  }
}
