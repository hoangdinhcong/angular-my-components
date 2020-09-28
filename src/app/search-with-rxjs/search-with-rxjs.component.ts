import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-with-rxjs',
  templateUrl: './search-with-rxjs.component.html',
  styleUrls: ['./search-with-rxjs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchWithRxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
