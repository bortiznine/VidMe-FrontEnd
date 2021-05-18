import { Component, OnInit } from '@angular/core';
import {VidmeService} from '../services/vidme/vidme.service';
declare const M;
@Component({
  selector: 'app-vidmelibrary',
  templateUrl: './vidmelibrary.component.html',
  styleUrls: ['./vidmelibrary.component.css']
})
export class VidmelibraryComponent implements OnInit {

  public vids: [];
  constructor(private vidmeService: VidmeService) { }

  getVids(): any {
    this.vidmeService.getVidMe().subscribe(response => {
      this.vids = response;
    }, err => console.log(err));
  }

  ngOnInit(): void {
    this.getVids();

    if (!localStorage.getItem('currentUser')) {
      const toastHTML = '<span>You must login to see your categories</span>';
      M.toast({html: toastHTML});
    }
  }
}
