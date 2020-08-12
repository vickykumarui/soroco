import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/common.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  constructor(private dataService: DataService) { }
  searchItem = '';
  ngOnInit() {
  }

  searchIssues() {
    console.log(this.searchItem);
    this.dataService.updatedDataSelection(this.searchItem);
  }
}
