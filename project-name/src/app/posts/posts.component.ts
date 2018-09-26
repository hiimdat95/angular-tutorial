import { Component, OnInit } from "@angular/core";
import axios from "axios";
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { PostsService } from "../services/posts/posts.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  data = [];

  show: Boolean;

  constructor(private postService: PostsService) { }
  displayedColumns: string[] = ['name','email','active'];
  // dataSource = new MatTableDataSource(this.postService.getListPost().subscribe((respone: any));
  
  ngOnInit() {
    this.show = true;
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then(res => {

    //     this.data = res.data;
    //     this.show = false;
    //   })
    //   .catch(err => console.log(err));

    this.postService.getListPost().subscribe((respone: any) => {
      this.data = respone;
      this.show = false;
    })
  }
}