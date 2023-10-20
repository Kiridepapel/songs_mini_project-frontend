import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StringResponse } from '../dtos/StringResponse.dto';

@Injectable({
  providedIn: 'root',
})
export class PythonService {
  private apiUrl = 'http://localhost:8080/api/python';

  constructor(private http: HttpClient) {}

  getAudioUrlFromYouTube(
    songName: string,
    artistName: string
  ): Observable<StringResponse> {
    const params = new HttpParams()
      .set('songName', songName)
      .set('artistName', artistName);
    return this.http.get<StringResponse>(this.apiUrl + '/get-audio-url', {
      params,
    });
  }

  getLyrics(songName: string, artistName: string): Observable<StringResponse> {
    const params = new HttpParams()
      .set('songName', songName)
      .set('artistName', artistName);
    return this.http.get<StringResponse>(this.apiUrl + '/get-lyrics', {
      params,
    });
  }
}
