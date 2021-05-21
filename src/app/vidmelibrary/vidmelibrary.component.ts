import { Component, OnInit } from '@angular/core';
import {VidmeService} from '../services/vidme/vidme.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

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
  public urlRegex =  '[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}(.[a-z]{2,4})?\b(/[-a-zA-Z0-9@:%_+.~#?&//=]*)?';
  public urlForm: FormGroup;

  constructor(private vidmeService: VidmeService, private route: ActivatedRoute) {
    this.urlForm = new FormGroup({
      url: new FormControl('', {
        validators: [Validators.required, Validators.pattern(this.urlRegex)],
        updateOn: 'blur',
      }),
    });
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
    console.log(this.isValidUrl('www.google.com'));
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
    {
      // @ts-ignore
      const index = this.vids.indexOf(vid);
      console.log(index);
      this.vidmeService.deleteVid(vid).subscribe(res => {
          // @ts-ignore
          this.vids.splice(index, 1);
          console.log(res);
        },
        err => {
          console.log(err);
          alert('Cannot Delete Other Users Items!');
        });
    }
    // else {
    //   alert('Not the user to delete this item!');
    // }
//   windowError(vid){
//     window.onerror{
//       var message = "Can't delete others Items";
// alert(message);
//     }
//   }
  }
  public isValidUrl(urlString: string): boolean {
    try {
      let pattern = new RegExp(this.urlRegex);
      let valid = pattern.test(urlString);
      return valid;
    } catch (TypeError) {
      return false;
    }
  }
// console.log(this.isValidUrl('https://www.google.com')); // true
// console.log(this.isValidUrl('google')); // false
}

