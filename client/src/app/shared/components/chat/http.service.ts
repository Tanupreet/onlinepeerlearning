import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { config } from '../../config/config';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
    
    config = config;
    
    /* 
	* Setting the Request headers.
	*/
    private headerOptions = new RequestOptions({
        headers : new Headers({ 'Content-Type' : 'application/json;charset=UTF-8' })
    });

  	constructor( private http:Http) { }

  	public userNameCheck(params){
  		return this.http.post(this.config.connect.url + this.config.connect.port+'/chat/usernameCheck',JSON.stringify(params),this.headerOptions)
  			.map( (response:Response) => response.json())
  			.catch( (error:any) => Observable.throw(error.json().error || `Server error`) );
  	}

	public login(params){
        return this.http.post(this.config.connect.url + this.config.connect.port+'/chat/login',JSON.stringify(params),this.headerOptions)
  			.map( (response:Response) => response.json())
  			.catch( (error:any) => Observable.throw(error.json().error || `Server error`) );
  	}

  	public registerUser(params){
  		return this.http.post(this.config.connect.url + this.config.connect.port+'/chat/registerUser',JSON.stringify(params),this.headerOptions)
  			.map( (response:Response) => response.json())
  			.catch( (error:any) => Observable.throw(error.json().error || `Server error`) );
  	}

    public userSessionCheck(params){
        return this.http.post(this.config.connect.url + this.config.connect.port+'/chat/userSessionCheck',JSON.stringify(params),this.headerOptions)
            .map( (response:Response) => response.json())
            .catch( (error:any) => Observable.throw(error.json().error || `Server error`) );
    }

	public getMessages(params){
		return this.http.post(this.config.connect.url + this.config.connect.port+'/chat/getMessages',JSON.stringify(params),this.headerOptions)
	    	.map( (response:Response) => response.json())
	      	.catch( (error:any) => Observable.throw(error.json().error || `Server error`) );
	}
}
