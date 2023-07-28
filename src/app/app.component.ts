import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  title = 'sortTable';

  addresses: any[] | undefined;

  ngOnInit(): void {
    this.addresses = [
      { postcode: '31900', city: 'Kassel', street: 'Klausstraße' },
      { postcode: '30166', city: 'Aachen', street: 'Musterstraße' },
      { postcode: '31900', city: 'Musterstadt', street: 'Ziegenstraße' },
      { postcode: '31900', city: 'Musterstadt', street: 'Aiegenstraße' },
    ];

    // Sort the addresses first by Postcode, then by City, then by Street
    this.addresses.sort((a, b) => {
      if (a.postcode !== b.postcode) {
        return a.postcode.localeCompare(b.postcode);
      } else if (a.city !== b.city) {
        return a.city.localeCompare(b.city);
      } else {
        return a.street.localeCompare(b.street);
      }
    });
  }
}
