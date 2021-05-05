import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  changeDetection : ChangeDetectionStrategy.OnPush,
  styleUrls: ['./blog-post-tile.component.scss']
  //encapsulation: ViewEncapsulation.None

})
export class BlogPostTileComponent implements OnInit {

 @Input() post: BlogPost;
  fullSummary :string;
  constructor(private trucatePipe: TruncatePipe ) { }

  ngOnInit() {
    this.fullSummary = this.post.summary;
    this.post.summary = this.trucatePipe.transform(this.post.summary,[50])
  }

  showFullSummary(){
    this.post.summary = this.fullSummary;
  }

  toggleFav(){
    this.post.isFav = !this.post.isFav;
  }
}
