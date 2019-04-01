import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SafePipe } from './safe.pipe';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { FormsModule } from '@angular/forms';
import { ContentTypePipe } from './content-type.pipe';
import { MessagesComponent } from './messages/messages.component';
import { CreateContentComponent } from './create-content/create-content.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from './in-memory-data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    ContentListComponent,
    ContentCardComponent,
    ContentTypePipe,
    MessagesComponent,
    CreateContentComponent,
    ContentDetailComponent,
    NotFoundComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatInputModule,
      FormsModule,
      RouterModule.forRoot([
        { path: 'content/:id', component: ContentDetailComponent },
        { path: 'content', component: ContentListComponent },
        { path: '**', component: NotFoundComponent }
        ]),
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(
              InMemoryDataService, { dataEncapsulation: false })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
