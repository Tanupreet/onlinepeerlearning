import { Component, OnInit } from '@angular/core';

import { EditorService } from '../../services/editor.service';
import { GitService } from '../../services/git.service'
@Component({
  selector: 'app-repo-sidebar',
  templateUrl: './repo-sidebar.component.html',
  styleUrls: ['./repo-sidebar.component.css']
})
export class RepoSidebarComponent implements OnInit {

githubUser: any;
  selectedValue: any;
  data: any;
  fileData: any;
  selectedfile: any;
  url: any = "";
  text: string ="enter code here";

  constructor(private editorService: EditorService, private gitService: GitService) { }

ngOnInit() {
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
  
}
