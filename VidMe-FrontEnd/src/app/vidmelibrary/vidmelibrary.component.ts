import { Component, OnInit } from '@angular/core';
import {VidmeService} from '../services/vidme/vidme.service';
import {UserService} from '../services/user/user.service';
import * as url from 'url';
import {ActivatedRoute} from '@angular/router';
import {HttpErrorResponse} from "@angular/common/http";
declare const M;
@Component({
  selector: 'app-vidmelibrary',
  templateUrl: './vidmelibrary.component.html',
  styleUrls: ['./vidmelibrary.component.css']
})
export class VidmelibraryComponent implements OnInit {

  public vids: any[];
  public vid: any;
  public vidTitle: string;
  public vidurl: string;
  public userName: string;

  constructor(private vidmeService: VidmeService, private route: ActivatedRoute) {
  }

  getVids(): any {
    this.vidmeService.getVidMe().subscribe(response => {
      this.vids = response;
    }, err => console.log(err));
  }

  createVid(): any {
    const newVid = {
      title: this.vidTitle,
      vidurl: this.vidurl,
      userName: this.userName,
    };
    this.vidmeService.createVid(newVid).subscribe(response => {
      this.vids = [...this.vids, response];
    }, err => console.log(err));
  }

  ngOnInit(): void {
    this.getVids();
    if (!localStorage.getItem('currentUser')) {
      const toastHTML = '<span>You must login to see your Vid Items</span>';
      M.toast({html: toastHTML});
      // added from Jen's suggestion might need adjustment
      this.route.paramMap.subscribe(params => {
        this.vid = this.vids.find(vid => {
          return vid.id === parseInt(params.get('id'), 10);
        });
      });
      console.log('This is the vid: ' + this.vid);
    }
  }

  deleteVid(vid): any {
    // if (HttpErrorResponse error = 404) {
    {
      // @ts-ignore
      const index = this.vids.indexOf(vid);
      console.log(index);
      this.vidmeService.deleteVid(vid).subscribe(() => {
        // @ts-ignore
        this.vids.splice(index, 1);
      });
      //   }
      //     else {
      //       alert('Not the user to delete this item!');
      //     }
      // }
    }
  }
}
