import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';




@Injectable()
export class GitService {
   private userName: string;
   // private clientId: string = '<Client Id>';
   // private clientSecret: string = '<Client Secret Key>';
   private clientId: string = '60b9f23dedffbdfc476c';
   private clientSecret: string = 'd1c186c6373f96571c0bfcf76b84e4dc6fd0c15a';

   constructor(private _http: Http) {
       // console.log('Github Service Ready.');
       this.userName = 'Tanupreet';
   }

   getUser() {
       if (this.userName) {
           return this._http.get('http://api.github.com/users/' + this.userName +
                   '?client_id=' + this.clientId +
                   '&client_secret=' + this.clientSecret)
               .map(res => res.json())
               .catch(this.handleError);
       }

   }

   getRepos() {
       if (this.userName) {
           return this._http.get('http://api.github.com/users/' + this.userName +
                   '/repos?client_id=' + this.clientId +
                   '&client_secret=' + this.clientSecret)
               .map(res => res.json())
               .catch(this.handleError);
       }

   }

/*   getTree() {
       if (this.userName) {
           return this._http.get('http://api.github.com/repos/' + this.userName +
                   this.repo + 'contents?client_id=' + this.clientId +
                   '&client_secret=' + this.clientSecret)
               .map(res => res.json())
               .catch(this.handleError);
       }
   }


   getFile() {
       if (this.userName) {
           return this._http.get('http://api.github.com/repos/' + this.userName +
                   this.repo + 'contents' + this.file + '?client_id=' + this.clientId +
                   '&client_secret=' + this.clientSecret)
               .map(res => res.json())
               .catch(this.handleError);
       }
   }
*/

   updateUser(userName: string) {
       this.userName = userName;
   }

   private handleError(error: any) {

       if (error.status === 401) {
           return Observable.throw(error.status);
       } else {
           return Observable.throw(error.status || 'Server error');
       }
   }
}