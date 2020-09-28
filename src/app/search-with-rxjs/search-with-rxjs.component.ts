import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';

import { RepositorySearchResponse } from '../models/github-repo.model';


const GITHUB_URL = 'https://api.github.com/search/repositories';

@Component({
  selector: 'app-search-with-rxjs',
  templateUrl: './search-with-rxjs.component.html',
  styleUrls: ['./search-with-rxjs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchWithRxjsComponent implements OnInit {

  queries$ = new Subject<string>();
  searchResult$: Observable<RepositorySearchResponse>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.searchResult$ = this.queries$.pipe(
      map((query: string) => query ? query.trim() : ''),
      filter(Boolean),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query: string) => this.fetchRepositories(query))
    );

  }

  onTextChange(query: string): void {
    this.queries$.next(query);
  }

  private fetchRepositories(query: string): Observable<RepositorySearchResponse> {
    return this.http.get<RepositorySearchResponse>(GITHUB_URL, { params: { q: query } });
  }
}
