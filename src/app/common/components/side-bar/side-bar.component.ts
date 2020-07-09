import {Component, Input, OnInit} from '@angular/core';
import {IInfection} from '../../model';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input() infections: IInfection[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
