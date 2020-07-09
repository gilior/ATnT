import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IInfection, location} from '../../../common/model';

@Component({
  selector: 'infection-details',
  templateUrl: './infection-details.component.html',
  styleUrls: ['./infection-details.component.scss']
})
export class InfectionDetailsComponent implements OnInit {
  location: location;
  datetime: Date;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.data
      .subscribe((data: { infection: IInfection }) => {
        this.location = data.infection.location;
        this.datetime = data.infection.datetime;
      });
  }


}
