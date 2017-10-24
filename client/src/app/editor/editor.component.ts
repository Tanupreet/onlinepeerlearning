
import {  OnInit } from '@angular/core';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core'

import { AceEditorModule } from 'ng2-ace-editor'; 
import { FormsModule } from '@angular/forms';
import * as $ from 'jquery';

import 'brace';
import 'brace/ext/language_tools';
import 'brace/mode/html';
import 'ace-builds/src-min-noconflict/snippets/html';


import { EditorService } from '../services/editor.service';
import { GitService } from '../services/git.service'


@Component({
	selector: 'runkit-embed',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @ViewChild('embed') embed
  @Input() source: string
  @Input() readOnly: boolean
  @Input() model: string
  @Input() nodeVersion: string
  @Input() env: string[]
  @Input() title: string
  @Input() minHeight: string
  @Input() packageTimestamp: string
  @Input() preamble: string
  @Output() onLoad: EventEmitter<{}> = new EventEmitter
  @Output() onURLChanged: EventEmitter<{}> = new EventEmitter
  @Output() onEvaluate: EventEmitter<{}> = new EventEmitter
  notebook: any
  ngAfterViewInit() {
    this.notebook = window['RunKit'].createNotebook({
      element: this.embed.nativeElement,
      source: this.source,
      readOnly: this.readOnly,
      model: this.model,
      nodeVersion: this.nodeVersion,
      env: this.env,
      title: this.title,
      minHeight: this.minHeight,
      packageTimestamp: this.packageTimestamp,
      preamble: this.preamble,
      onLoad: this.onLoad.emit.bind(this.onLoad),
      onURLChanged: this.onURLChanged.emit.bind(this.onURLChanged),
      onEvaluate: this.onEvaluate.emit.bind(this.onEvaluate)
    })
  }
  evaluate() {
    this.notebook.evaluate()
  }

  //declaring variables

  enter:string;


  lang: any;
  url: any = "";

  text: string = "Enter your code here";
  githubUser: any;
  selectedValue: any;
  data: any;
  fileData: any;
  selectedfile: any;

  output:any;
  value:{};
  	windowRef:any;
	screenSharingLink:any;

  options: any = {
  	maxLines: 1000, 
  	printMargin: false,
  };
  
  val:any


  //creating the instances of services
  constructor(private editorService: EditorService, private gitService: GitService) {}

screenShare(call) {
	 this.windowRef= window;
	 if (this.windowRef.TogetherJS) {
		 this.windowRef.TogetherJS();

		 setTimeout(function(){
				$('.togetherjs-dock-right').remove();
				this.screenSharingLink=$('.togetherjs-share-link').val();
				console.log("=======11111",this.screenSharingLink);
				$('#togetherjs-share').remove();
				$('#togetherjs-window-pointer-right').remove();
			},1000)
	 }
 }

  //method to execute the code 
  run(text) {
    this.enter = "output"
    this.value = {
      run: text

    }
    this.editorService.runCode(this.value).subscribe(data => {
      this.output = data.result;
      console.log(this.output)
    }, err => this.output = err)
  }

  //method to clear the terminal
  clear(text) {
    this.text = null;
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
    this.gitService.openFolder(reponame, filename)
      .subscribe(
        data => {
          this.data = data
          this.url = this.url + filename + "/"
          console.log(this.url)
        }
        , err => {
          this.show(reponame, this.url + filename)
          this.url = "";
        })
  }

  show(reponame, filename) {
    this.gitService.getFile(reponame, filename)
      .subscribe(data => {
        this.fileData = data;
        this.text = this.fileData._body;
      })
  }


  mode(language) {
    this.lang = language;
  }
}
