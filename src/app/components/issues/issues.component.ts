import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }
  listOfIssue: any[] = [];
  originalListCopy: any[] = [];
  ngOnInit() {

    // get list of issues
    this.dataService.getListOfissue('https://api.github.com/repos/twbs/bootstrap/issues').subscribe((result: any) => {
      console.log(result);
      this.listOfIssue = result;
      this.originalListCopy = result;
    });

    this.dataService.data.subscribe((searchQuery) => {

        this.listOfIssue = [... this.originalListCopy]; // every time filter on original data in case if user press backspace
        if (searchQuery) {
          this.searchIssue(searchQuery);
        }
    });
  }

   searchIssue(searchQuery) {
    this.listOfIssue = this.listOfIssue.filter((issue) => {
        if (issue.title.indexOf(searchQuery) >= 0) {
          return true;
        }
    });

    console.log(this.listOfIssue, this.listOfIssue.length);
   }

   routeToDetails(id) {
      this.router.navigate(['issues/:' + id]);
   }

}
