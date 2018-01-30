import { Injectable } from '@angular/core';

import { memo } from './memo';
import { MEMOS } from './mock-memos';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class MemoService {

  constructor() { }

 getMemos() : Observable<memo[]> {
  	return of(MEMOS);
  }

  /** GET hero by id*/
  getMemo(id: number): Observable<memo[]> {
    console.log(id);
    //console.log(MEMOS);
    for(let memo of MEMOS){
    	//console.log(memo);
    	if(memo.id == id){
    		return of(memo);
    	}

    }
  }


}
