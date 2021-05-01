import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {

 @Input() post: BlogPost;
  constructor(private trucatePipe: TruncatePipe ) { }

  ngOnInit() {
    this.post.summary = this.trucatePipe.transform(this.post.summary,[50])
  }

}
