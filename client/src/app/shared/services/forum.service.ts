import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ForumService {

 constructor(private http:Http) { }

 ngOnInit() { }     //method is used to hit api on express server and post the data of form in database     
 save(data:any){         
     return this.http         .
               post('https://localhost:8080/api/forum',data)         
               .map(res=>res.json());     }

 getPost(){         
     return this.http         .
               get('https://localhost:8080/api/forum')         
                .map(res=>res.json());     }

  searchEntries(searchTerm:any) {
    var api='https://localhost:8080/api/forum/'+ searchTerm
    console.log(searchTerm,"agaya")
  return this.http
      .get(api)
      .map(res => res.json());
}               


}
