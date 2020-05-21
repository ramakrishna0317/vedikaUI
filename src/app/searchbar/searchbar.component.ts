import { Component,OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SearchbarService } from '../searchbar.service';
import { halls } from '../functionhall/models/halls';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  // public selectedId: any;
  public query: string;
  public test:string  ;
  public functionHalls: any = [];
  public filteredData: any = [];
  searchParam:any = "";
   functionhalls : halls[];

  constructor(
    private searchSvc: SearchbarService,
    private router: Router
    ) { }
  
  ngOnInit(): void {
  
    this.searchSvc.getAllFunctionHalls()
        .subscribe( Response => {
      console.log("Functionhalls")
      this.functionHalls = Response["functionHalls"]  
      this.router.navigate(['/functionhall']);
  },(error) => { console.log(error);})
  }

  onSelect(item: any){
    this.query = item.name + " " + item.street+" "+item.city;
        this.searchParam = item;
   this.router.navigate(['/functionhall']);
  }

  onSearch(){
  
    if(this.query.length < 3) {
      this.filteredData = [];
      return;
    }

    this.functionHalls.forEach(element => {
      let keys = Object.keys(element);
      keys.forEach(k => {
        let item;
        if(element[k].toString().toLowerCase().includes(this.query.toLowerCase())){
          console.log(element);
          item = element;
        }
        if(item != null) this.filteredData.push(item);
      });
    });
  }
  getAllFunctionHalls()
{
  this.router.navigate(['/functionhall', JSON.stringify(this.searchParam)]);

}
}




// getResults(){
//   this.router.navigate(['/functionhall', JSON.stringify(this.searchParam)]);
// }