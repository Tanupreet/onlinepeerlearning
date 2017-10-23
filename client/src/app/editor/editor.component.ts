import { Component, OnInit, ViewChild } from '@angular/core';
import { AceEditorModule } from 'ng2-ace-editor'; 
import { FormsModule } from '@angular/forms';
import 'brace';
import 'brace/ext/language_tools';
import 'brace/mode/html'; 
import 'ace-builds/src-min-noconflict/snippets/html';
import { GitService } from '../services/git.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  title = 'app';
  text:string = "Enter your code here";
  @ViewChild('editor') editor;
  githubUser: any;
  selectedValue: any;
  data: any;
  fileData:any;
  selectedfile: any;
  options: any = {
  	maxLines: 1000, 
  	printMargin: false,
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,

  };
  val:any

    constructor(private gitService:GitService){}
    onChange(code) {
        console.log("new code", code);
    } 

    ngOnInit() {
   /* 	this.editor.getEditor().$blockScrolling = Infinity;*/
      this.gitService.getRepos()
      .subscribe(repos => {
                // console.log(repos);
                this.githubUser = repos;
      console.log(this.githubUser)
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

}