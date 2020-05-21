import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchbarService } from '../searchbar.service';

@Component({
  selector: 'app-functionhall',
  templateUrl: './functionhall.component.html',
  styleUrls: ['./functionhall.component.css']
})
export class FunctionhallComponent implements OnInit {
  functionHalls: any;
  query: any;
  searchParam: any;
  filteredData: any[];
  constructor(
    private searchSvc: SearchbarService,
    private router: Router
    ) { }

    onSelect(item: any){
      this.query = item.name + " " + item.street+" "+item.city;
          this.searchParam = item;
     this.router.navigate(['/functionhallpage', JSON.stringify(item)]);
    }
z
ngOnInit(): void {
    this.searchSvc.getAllFunctionHalls()
        .subscribe( Response => {
      
      this.functionHalls = Response["functionHalls"]
        console.log(this.functionHalls)
  },(error) => { console.log(error);})
  }
}