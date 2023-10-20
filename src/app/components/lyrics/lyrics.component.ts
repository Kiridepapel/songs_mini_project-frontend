import { Component } from '@angular/core';
import { StringResponse } from 'src/app/dtos/StringResponse.dto';
import { PythonService } from 'src/app/services/python.service';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss'],
})
export class LyricsComponent {
  constructor(private pythonService: PythonService) {}

  lyrics: string = 'Esperando búsqueda de canción...';
  foundLyricsClass: string = 'lyrics';

  getLyrics(trackName: string, trackArtist: string) {
    this.pythonService.getLyrics(trackName, trackArtist).subscribe(
      (response: StringResponse) => {
        this.lyrics = response.response;
        this.foundLyricsClass = 'lyrics-found';
      },
      (error) => {
        this.foundLyricsClass = 'lyrics-not-found';
        console.error('No se pudo obtener la letra de la canción.');
      }
    );
  }
}
