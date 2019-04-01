import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContentService} from '../services/content.service';
import {Content} from '../content-card/content-list-helper';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  id: number;
  content: any = {};
  constructor( private route: ActivatedRoute, private contentService: ContentService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(response => {
      this.id = +response.get('id');
      this.contentService.getContentItem(this.id).subscribe(
            c => {this.content = c; console.log(this.content);
    });
  });
  }
}

