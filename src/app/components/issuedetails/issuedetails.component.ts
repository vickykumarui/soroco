import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/common.service';
@Component({
  selector: 'app-issuedetails',
  templateUrl: './issuedetails.component.html',
  styleUrls: ['./issuedetails.component.scss']
})
export class IssuedetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService) { }
  currId: string;
  currIssueDetails: any;
  ngOnInit() {
    this.currId = this.route.snapshot.paramMap.get('id');
    console.log(this.currId);

    // fetch current item details
    this.dataService.getListOfissue('https://api.github.com/repos/twbs/bootstrap/issues/' +
     this.currId.replace(':', '')).subscribe((response) => {
      console.log(response);
      this.currIssueDetails = response;
    });
    
  }

}
