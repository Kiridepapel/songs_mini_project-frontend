import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Track } from '../interfaces/Track.interface';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private apiUrl = 'http://localhost:8080/api/spotify';

  constructor(private http: HttpClient) {}

  searchTracks(query: string): Observable<Track[]> {
    return this.http.get<Track[]>(this.apiUrl + '/search?query=' + query);
  }
}
