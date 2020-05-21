import { Component, OnInit } from '@angular/core';
import { SearchbarService } from 'src/app/searchbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-functionhallpage',
  templateUrl: './functionhallpage.component.html',
  styleUrls: ['./functionhallpage.component.css']
})
export class FunctionhallpageComponent implements OnInit {
  functionHalls: any;
  query: any;
  searchParam: any;
  filteredData: any[];
  item: boolean = false;
  constructor(
    private searchSvc: SearchbarService,
    private router: Router
    ) { }


  ngOnInit(): void {
    this.searchSvc.getAllFunctionHalls()
        .subscribe( Response => {
      
      this.functionHalls = Response["functionHalls"]
        console.log(this.functionHalls)
  },(error) => { console.log(error);})
  }
}