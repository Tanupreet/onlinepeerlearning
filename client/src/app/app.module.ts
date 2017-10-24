import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AceEditorModule } from 'ng2-ace-editor'; 
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { GitService } from './services/git.service'
import { EditorService } from './services/editor.service';
import { ChatService } from './services/chat.service';
import { OnlineusersComponent } from './onlineusers/onlineusers.component';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { ProfileComponent } from './profile/profile.component'

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    OnlineusersComponent,
    GroupChatComponent,
    ProfileComponent
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
     },
     {
        path: 'groupChat',
        component: GroupChatComponent
      },
      {
        path: 'onlineUsers',
        component: OnlineusersComponent
      },
      {
        path: 'editProfile',
        component: ProfileComponent
      }
   ])
 ],
  providers: [GitService,EditorService,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
