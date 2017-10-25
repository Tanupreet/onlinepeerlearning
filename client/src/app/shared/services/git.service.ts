import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
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
  //method to get github username
  getUser() {
    if (this.userName) {
      return this._http.get('http://api.github.com/users/' + this.userName +
          '?client_id=' + this.clientId +
          '&client_secret=' + this.clientSecret)
        .map(res => res.json())
        .catch(this.handleError);
    }
  }
  //method to get all the repositories of the user
  getRepos() {
    if (this.userName) {
      return this._http.get('http://api.github.com/users/' + this.userName +
          '/repos?client_id=' + this.clientId +
          '&client_secret=' + this.clientSecret)
        .map(res => res.json())
        .catch(this.handleError);
    }
  }
  getTree(repo) {
    if (this.userName) {
      return this._http.get('http://api.github.com/repos/' + this.userName + "/" +
          repo + '/contents?client_id=' + this.clientId +
          '&client_secret=' + this.clientSecret)
        .map(res => res.json())
        .catch(this.handleError);
    }
  }
  openFolder(repo, file) {
    if (this.userName) {
      let headers = new Headers({ 'accept': "application/vnd.github.VERSION.raw" });
      let options = new RequestOptions({ headers: headers });
      return this._http.get('http://api.github.com/repos/' + this.userName + "/" +
          repo + '/contents/' + file + '?client_id=' + this.clientId +
          '&client_secret=' + this.clientSecret, options)
        .map(res => res.json())
    }
  }
  getFile(repo, file) {
    if (this.userName) {
      let headers = new Headers({ 'accept': "application/vnd.github.VERSION.raw" });
      let options = new RequestOptions({ headers: headers });
      return this._http.get('http://api.github.com/repos/' + this.userName + "/" +
        repo + '/contents/' + file + '?client_id=' + this.clientId +
        '&client_secret=' + this.clientSecret, options)
      //.map(res => res.json())
      // .catch(this.handleError);
    }
  }
  //method to update the user
  updateUser(userName: string) {
    this.userName = userName;
  }
  //method to handle error
  private handleError(error: any) {
    if (error.status === 401) {
      return Observable.throw(error.status);
    } else {
      return Observable.throw(error.status || 'Server error');
    }
  }
}