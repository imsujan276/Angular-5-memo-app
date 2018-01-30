import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { MEMOS } from '../mock-memos';
import { Memo } from '../memo';

import { MemoService } from '../memo.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

	memoCount : number = 0;

	memos = MEMOS;

	selectedMemo = Memo;

  constructor(private memoService : MemoService) { }

  ngOnInit() {
  	this.getMemos();

  	this.memoCount = MEMOS.length;
  }

  onSelect( memo : Memo): void {
  	this.selectedMemo = memo;
  	console.log('selected Memo : ',memo);
  }

  getMemos(): void {
  	this.memoService.getMemos().subscribe(memos => this.memos = memos);
  }

  saveMemo(myValue : ngForm): void{
  	console.log(myValue.value.title);
  	console.log(myValue.value.body);

  	if(myValue.value.title != '' && myValue.value.body != ''){
  		myValue.value.id = getRandomId();
  		MEMOS.push(myValue.value);
  	}else{
  		alert('Both the fields are ompulsary');
  	}
  	
  	this.memoCount = MEMOS.length;
  }


  onDelete( memo : Memo ) : void{
  	console.log(memo);
  	MEMOS.pop(memo);

  	this.selectedMemo = '';
  }

  onUpdate( memo : Memo ) : void {
  	console.log(memo.id);

  	memo.title = memo.title;
  	memo.body = memo.body;

  	console.log(memo);
  }



   function getRandomId() {
     return Math.floor((Math.random()*99)+1);
   }


}
