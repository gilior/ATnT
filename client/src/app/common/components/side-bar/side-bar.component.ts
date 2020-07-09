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

  get infections_sorted(): IInfection[] {
    if (!this.infections) {
      return;
    }
    const c = this.infections.sort((a, b) => {
      let aa = new Date(a.datetime);
      let bb = new Date(b.datetime);
      return aa > bb ? -1 : aa < bb ? 1 : 0;
    });
    return c;
  }

  ngOnInit(): void {
  }

}
