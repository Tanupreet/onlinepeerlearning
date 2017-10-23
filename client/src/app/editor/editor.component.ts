import { Component, OnInit } from '@angular/core';
import { AceEditorModule } from 'ng2-ace-editor'; 
import { FormsModule } from '@angular/forms';
import 'brace';
import 'brace/ext/language_tools';
import 'brace/mode/html'; 
import 'ace-builds/src-min-noconflict/snippets/html';

import { EditorService } from '../services/editor.service';
import { GitService } from '../services/git.service'

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  //declaring variables
  enter:string;
  title = 'app';
  text:string = "";
  output:any;
  value:{}
  githubUser: any
  options: any = {
  	maxLines: 1000, 
  	printMargin: false,

  };

  //creating the instances of services
  constructor(private editorService: EditorService,private gitSerivce:GitService){}

  //method to execute the code 
  run(text){
    this.enter="output"
    this.value={run:text
    
  }
    this.editorService.runCode(this.value).subscribe(data => {
      this.output=data.result;
      console.log(this.output)
    })
  }

  //method to clear the terminal
  clear(text) {
    this.text=null;
  }

  //method to get github repositories
  ngOnInit() {
    this.gitSerivce.getRepos()
    .subscribe(repos => {
      this.githubUser = repos;

    })
  }
}