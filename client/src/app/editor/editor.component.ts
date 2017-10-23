import { Component, OnInit, ViewChild } from '@angular/core';
import { AceEditorModule } from 'ng2-ace-editor'; 
import { FormsModule } from '@angular/forms';
import 'brace';
import 'brace/ext/language_tools';
import 'brace/mode/html'; 
import 'ace-builds/src-min-noconflict/snippets/html';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  title = 'app';
  text:string = "";
      @ViewChild('editor') editor;
  options: any = {
  	maxLines: 1000, 
  	printMargin: false,
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
  };
    
    onChange(code) {
        console.log("new code", code);
    } 

    ngOnInit() {
    	this.editor.getEditor().$blockScrolling = Infinity;
    }
}