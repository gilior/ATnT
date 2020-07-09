import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../model';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Input() user: IUser;
  @Input() items_count: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
