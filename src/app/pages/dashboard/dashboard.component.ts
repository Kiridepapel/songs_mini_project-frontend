import { Component, OnInit, ViewChild } from '@angular/core';
import { StringResponse } from 'src/app/dtos/StringResponse.dto';
import { Track } from 'src/app/interfaces/Track.interface';
import { SpotifyService } from 'src/app/services/spotify.service';
import { PythonService } from 'src/app/services/python.service';
import { LyricsComponent } from 'src/app/components/lyrics/lyrics.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @ViewChild(LyricsComponent) lyricsComponent?: LyricsComponent;
  query = '';
  tracks: Track[] = [];
  currentAudio: HTMLAudioElement | undefined;

  constructor(
    private spotifyService: SpotifyService,
    private pythonService: PythonService
  ) {}

  searchTracks() {
    this.spotifyService.searchTracks(this.query).subscribe((tracks) => {
      this.tracks = tracks;
    });
  }

  onAudioEnded() {
    if (this.currentAudio) {
      this.currentAudio.pause();
    }
  }

  playTrack(trackData: string[]) {
    const trackName = trackData[0];
    const trackArtist = trackData[1];

    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.removeEventListener('ended', this.onAudioEnded);
    }
    this.pythonService.getAudioUrlFromYouTube(trackName, trackArtist).subscribe(
      (response: StringResponse) => {
        // Lyrics
        this.lyricsComponent?.getLyrics(trackName, trackArtist);
        // Audio
        const audio = new Audio();
        audio.src = response.response;
        audio.play();
        audio.addEventListener('ended', this.onAudioEnded);
        this.currentAudio = audio;
      },
      (error) => {
        console.error('Error al obtener la URL del audio.');
      }
    );
  }
}
