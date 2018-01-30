import { Component, OnInit, Input} from '@angular/core';


import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Memo } from '../memo';
import { MemoService }  from '../memo.service';


@Component({ 

  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.scss']
})
export class MemoComponent implements OnInit {

	//@Input() memo: Memo ;
	memo = [];

	constructor(
	  private route: ActivatedRoute,
	  private memoService: MemoService,
	  private location: Location
	) {}

  ngOnInit() {
  	this.getMemo();
  }

	  getMemo(): void {
	    const id = +this.route.snapshot.paramMap.get('id');

	 	this.memoService.getMemo(id).subscribe(memo => this.memo = memo);

	  }
	 
	  goBack(): void {
	    this.location.back();
	  }
}
