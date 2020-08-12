import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService {

  private dataSource = new BehaviorSubject<string>('');
  data = this.dataSource.asObservable();

  constructor(private http: HttpClient) { }

  updatedDataSelection(data: string) {
    this.dataSource.next(data);
  }

  // https://api.github.com/repos/twbs/bootstrap/issues

  getListOfissue(url) {
    return this.http.get(url);
  }



}
