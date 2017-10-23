import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AceEditorModule } from 'ng2-ace-editor'; 
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
