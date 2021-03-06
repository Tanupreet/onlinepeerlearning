import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthenticationService } from './authentication.service';
import { RequestOptions, Request, RequestMethod, Headers } from '@angular/http';

@Injectable()
export class ForumService {

  constructor(private http: Http, private autheticationservice: AuthenticationService) {}

  ngOnInit() {} //method is used to hit api on express server and post the data of form in database     
  
  save(data: any) {
    return this.http.
    post('https://localhost:8080/api/forum', data)
      .map(res => res.json());
  }

  getPost() {
    return this.http
      .get('https://localhost:8080/api/forum')
      .map(res => res.json());
  }

  searchEntries(searchTerm: any) {

    if (searchTerm != "") {
      var api = 'https://localhost:8080/api/forum/' + searchTerm
      return this.http
        .get(api)
        .map(res => res.json());

    } else {
      return this.http
        .get('https://localhost:8080/api/forum')
        .map(res => res.json());
    }
  }
  /*getEmployeeByID method to fetch details by id used in supervisor component*/
  getPostByQuestion(question: string) {
    return this.http.
    get('https://localhost:8080/api/forum/getQuestionDetail/' + question)
      .map(res => res.json());
  }


  // showAnswer(question: string) {
  //   return this.http
  //     .post('https://localhost:8080/api/forum/answer/' + )
  //     .map(res => res.json());
  // }
  saveAnswer(question,answer){
    console.log(answer);
     return this.http.
     put('https://localhost:8080/api/forum/update/' + question,answer)
      .map(res => res.json());

}

  private authoriZation() {
    let token = this.autheticationservice.getToken();
    if (token) {
      let headers = new Headers({ 'Authorization': token });
      return new RequestOptions({ headers: headers });
    }
  }


  addSnippet(data) {
    return this.http
      .post('https://localhost:8080/api/snippet',data)
      .map(res => res.json());
  }

    getSnippet() {
    return this.http
      .get('https://localhost:8080/api/snippet')
      .map(res => res.json());
  }

   /*update method used to modify snippet*/ 
     updateSnippet(title , code) {    
         return this.http    
          .put('https://localhost:8080/api/forum/update/' + title, code)   
            .map(res => res.json()); 
             }

              /*update method used to modify snippet*/ 
     deleteSnippet(title) {    
         return this.http    
          .put('https://localhost:8080/api/forum/delete/' , title)   
            .map(res => res.json()); 
             }




}
