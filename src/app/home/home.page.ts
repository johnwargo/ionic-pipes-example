import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private names: any[] = [{
    name: 'John Wargo',
    phone: '704.444.5566',
    city: 'Charlotte',
    state: 'North Carolina',
    zip: '28222'
  },
  {
    name: 'William Calhoun',
    phone: '704.444.6655',
    city: 'Akron',
    state: 'Ohio',
    zip: '44313'
  },
  {
    name: 'Michael Palin',
    phone: '432.889.5213',
    city: 'Washington',
    state: 'DC',
    zip: '00102'
  }];

  constructor() { }

}
