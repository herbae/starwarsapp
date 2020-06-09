import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  people: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }
 
  ngOnInit() {
    this.people = this.api.getPeople().pipe(
      tap(r => console.log(r))
    );
  }

  openDetails(person) {
    let split = person.url.split('/');
    let personId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/people/${personId}`);
  }

}
