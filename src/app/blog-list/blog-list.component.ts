import { Component, Input, OnInit } from '@angular/core';
import { title } from 'process';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPosts: BlogPost[] = [];
  constructor() { }

  ngOnInit() {
    this.blogPosts.push(new BlogPost("Blog Post 1","Summary 1"));
    this.blogPosts.push(new BlogPost("Blog Post 2","Summary 2"));
    this.blogPosts.push(new BlogPost("Blog Post 3","Summary 3"));

  }

}
