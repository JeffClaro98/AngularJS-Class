import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Content} from '../content-card/content-list-helper';
import {MessageService} from '../messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

    private httpOptions = {
        headers: new HttpHeaders({ 'Content-type':
                'application/json' })
    };

  constructor(private messageService : MessageService, private http: HttpClient) { }

  getContent() :Observable<Content []>{
      this.messageService.add('Content was fetched!');
      return this.http.get<Content[]>("api/content");
  }

    getContentItem(id): Observable<Content>{
      console.log("Retrieving OBSERVABLE content item");
      return this.http.get<Content>("api/content/" + id);
    }

    addContent(content: Content): Observable<Content>{
        this.messageService.add('Content was added!');
        return this.http.post<Content>("api/content", content,
            this.httpOptions);
    }

}
