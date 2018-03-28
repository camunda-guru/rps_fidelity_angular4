import { Injectable } from "@angular/core";
import 'rxjs';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NewAccountService
{

    private url:string="http://localhost:3000";
    constructor(public http:Http)
    {

    }

     sendAccountInformation(object)
     {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url+"/newaccount", object, options).toPromise()
            .then(this.extractData);


     }

     private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }


}
