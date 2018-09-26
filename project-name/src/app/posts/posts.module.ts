import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from "./posts.component";
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatTableModule } from '@angular/material/table'; 


@NgModule({
    imports: [CommonModule, PostsRoutingModule, MatButtonModule, MatCheckboxModule, MatTableModule],
    exports: [MatButtonModule, MatCheckboxModule, MatTableModule],
    declarations: [PostsComponent]
})
export class PostsModule { }