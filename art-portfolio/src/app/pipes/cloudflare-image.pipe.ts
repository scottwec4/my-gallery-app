import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({
  name: 'cloudflareImage',
  standalone: true
})
export class CloudflareImagePipe implements PipeTransform {
  transform(imageUrl: string, artId: string, variant: 'public' | 'thumbnail' = 'public'): string {
    if (!artId) return '';

    // If you have a unique artId, Cloudflare only needs the ID to fetch the image.
    // This completely removes the duplicate "images/dramaLady.jpg" path segment.
    return `${environment.cloudflareImageBase}/${artId}/${variant}`;
  }
}
