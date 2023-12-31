import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";

import { AlbumListComponent } from "./components/album-list/album-list.component";
import { HttpClientModule } from "@angular/common/http";
import { NewAlbumDialog } from "./components/new-album-dialog/new-album.dialog";
import { UpdateAlbumDialog } from "./components/update-album-dialog/update-album.dialog";

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    NewAlbumDialog,
    UpdateAlbumDialog,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule.forRoot([
      {
        path: "",
        component: AlbumListComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
