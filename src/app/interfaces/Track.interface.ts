import { Artist } from './Artist.interface';

export interface Track {
  id: string;
  name: string;
  durationMs: number;
  explicit: boolean;
  artists: Artist[];
  imageUrl: string;
}
