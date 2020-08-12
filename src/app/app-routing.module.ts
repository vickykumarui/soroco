import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssuesComponent } from './components/issues/issues.component';
import { IssuedetailsComponent } from './components/issuedetails/issuedetails.component';
const routes: Routes = [
  { path: '', redirectTo: '/issues', pathMatch: 'full'  },
  { path: 'issues', component: IssuesComponent },
  { path: 'issues/:id', component: IssuedetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
