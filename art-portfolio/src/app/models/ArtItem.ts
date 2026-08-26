export interface ArtItem {
  id: number;          // Matches Backend Long id
  title: string;       // Matches Backend String title
  medium: string;      // Matches Backend String medium
  dimensions: string;  // Matches Backend String dimensions
  year: string;        // Matches Backend String year
  imageUrl: string;    // Matches Backend String imageUrl
  category: string;    // Matches Backend String category (New)
  customId: string;    // Matches Backend String customId (New)
  price: string;       // Matches Backend String price (Changed from number to String to support currency symbols like "$1,200")
}
