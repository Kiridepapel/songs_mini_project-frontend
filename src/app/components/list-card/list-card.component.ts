import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Track } from 'src/app/interfaces/Track.interface';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
// list-card.component.ts
export class ListCardComponent {
  @Input() track!: Track;
  @Output() playTrack = new EventEmitter<string[]>();

  onPlayTrack(trackName: string, trackArtist: string) {
    this.playTrack.emit([this.track.name, this.track.artists[0].name]);
  }
}
