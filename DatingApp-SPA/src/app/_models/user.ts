import { Photo } from './photo';

export interface User {
  id: number;
  userName: string;
  knownAs: string;
  age: string;
  gender: string;
  lastActive: Date;
  created: Date;
  photoUrl: string;
  city: string;
  interests?: string;
  introduction?: string;
  lookingFor?: string;
  photos?: Photo[];
}
