import { Component, OnInit,AfterViewInit} from '@angular/core';
import { ForumService } from '../../../services/forum.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css'],
  providers: [ForumService]
})
export class NewpostComponent implements OnInit, AfterViewInit{

    ckeditorContent:any;
    date:any;
    questionTitle:string;
    problemDescription:string;
    tags:string;
    dateCurr:any;
    codeSnippet:string;
    obj:any={};
<<<<<<< HEAD
=======
    addSnippet:any;
>>>>>>> 8971b603fd6d6f0781c43223ef11b938c31825ee

 constructor(private forum:ForumService) { }
 
 ngOnInit() {

      this.date = new Date();  
      let day = this.date.getDate();    
      let month = this.date.getMonth() + 1;    
      let year = this.date.getFullYear();    
      this.date = day + '/' + month + '/' + year;
 }
  ngAfterViewInit(){
        var config = {
    extraPlugins: 'codesnippet',
    codeSnippet_theme: 'monokai_sublime',
    height: 356,
    removeButtons: 'Link,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Anchor,Underline,Strike,Subscript,Superscript,addFile,Image,Table,Styles,Format,Maximize,HorizontalRule,Unlink,Blockquote,Indent,Outdent,RemoveFormat,Spell',
    removePlugins: 'list,basicstyles,wsc,scayt,about,specialchar,scayt,spellchecker,elementspath,resize'

  };
  CKEDITOR.replace( 'addSnippet', config );
  CKEDITOR.instances.addSnippet.setData("");

   var problemDescriptionConfig = {
    codeSnippet_theme: 'monokai_sublime',
    height: 356,
    removeButtons: 'About,Cut,Save,NewPage,Outdent,Indent,-,Cut,Copy,Paste,PasteText,PasteFromWord,-,Maximize'
    
  };
CKEDITOR.replace( 'problemDescription', problemDescriptionConfig );
CKEDITOR.instances.problemDescription.setData("");
  }


 insertPost(data)
 {

       this.obj = {
      questionTitle: this.questionTitle,
      codeSnippet: CKEDITOR.instances.addSnippet.getData(),
      problemDescription: CKEDITOR.instances.problemDescription.getData(),
      tags:this.tags,
      date:this.date
    }
   
   this.forum.save(this.obj).subscribe((res)=>{

        //We get dialog result
        if (res) {
          swal({
      timer: 2200,
      title: "Posted Successfully",
      text:  "",
      type:  'success',
      showConfirmButton: false,
    })
        } else {
          swal({
      timer: 2200,
      title: "Error occured",
      text:  "",
      type: 'error',
      showConfirmButton: false,
    })
        }
      })
 }
}

