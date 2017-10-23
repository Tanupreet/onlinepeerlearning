import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AceEditorModule } from 'ng2-ace-editor'; 
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { GitService } from './services/git.service'

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AceEditorModule,
    RouterModule.forRoot([
   {
      path:'',redirectTo:'/editor',pathMatch:'full'
    },
    {
       path:'editor',
       component:EditorComponent
     }
   ])
 ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
