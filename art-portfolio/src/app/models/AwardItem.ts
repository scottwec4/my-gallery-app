export interface AwardItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

// Update the full API layout if both models come from the same file
import { ArtItem } from './ArtItem';
export interface FullApiResponse {
  artGallery: ArtItem[];
  awardsList: AwardItem[];
}
