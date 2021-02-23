import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { PostComponent } from './views/post/post.component';
import { CommentComponent } from './views/comment/comment.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { MedalsComponent } from './views/medals/medals.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PostComponent,
    CommentComponent,
    CategoriesComponent,
    MedalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
