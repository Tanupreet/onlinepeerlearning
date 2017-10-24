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
  lang: any;

  text:string = "Enter your code here";
  githubUser: any;
  selectedValue: any;
  data: any;
  fileData:any;
  selectedfile: any;
  output:any;
  value:{}

  options: any = {
  	maxLines: 1000, 
  	printMargin: false,
  };
  
  val:any

  //creating the instances of services
  constructor(private editorService: EditorService,private gitService:GitService){}

  //method to execute the code 
  run(text){
    this.enter="output"
    this.value={run:text
    
  }
    this.editorService.runCode(this.value).subscribe(data => {
      this.output=data.result;
      console.log(this.output)
    }, err=>this.output=err)
  }

  //method to clear the terminal
  clear(text) {
    this.text=null;
  }

  //method to get github repositories
  ngOnInit() {
    this.lang = "javascript";
    this.gitService.getRepos()
    .subscribe(repos => {
      this.githubUser = repos;

    })
  }

 reposearch()
      {
        
        console.log(this.selectedValue)
        this.gitService.getTree(this.selectedValue)
        .subscribe(data=>this.data=data)
      }


      showFile(reponame, filename) {
        this.gitService.getFile(reponame, filename)
        .subscribe(data=>{

          this.fileData=data;

          this.text=this.fileData._body;
        console.log(JSON.stringify(this.text))
      }, err=>console.log(err))
      }

      mode(language) {
this.lang = language;
      }
}