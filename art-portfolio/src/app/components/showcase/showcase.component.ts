import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="space-y-12 font-serif max-w-4xl mx-auto w-full text-center">
      <h2 class="text-xl uppercase tracking-[0.25em] text-[#f5f2eb] font-sans font-bold">The Art Gallery</h2>

      <!-- Centered Grid Elements Blocks -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-3xl mx-auto pt-6">
        @for (art of items; track art.title) {
          <div class="flex flex-col items-center group">
            <div class="bg-[#52504b] p-3 shadow-xl border border-[#9a9791]/20 max-w-sm w-full transition-all duration-300 group-hover:scale-[1.01]">
              <div class="bg-[#2e2d2a] aspect-[3/4] w-full overflow-hidden flex items-center justify-center">
                @if (art.imageUrl) {
                  <img [src]="art.imageUrl" [alt]="art.title" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity">
                } @else {
                  <span class="text-5xl opacity-40 select-none grayscale">🎨</span>
                }
              </div>
            </div>
            <div class="mt-4 text-center w-full max-w-sm border-t border-[#96938d]/30 pt-3">
              <h3 class="text-base font-medium text-[#fbfafa] tracking-wide font-serif mb-1">{{ art.title }}</h3>
              <p class="text-xs text-[#dfdac2] tracking-widest uppercase font-sans font-light">{{ art.medium }}</p>
              <p class="text-[11px] text-[#eae7e0]/50 font-serif mt-1">Year of Production: {{ art.year }}</p>
            </div>
          </div>
        }
      </div>
    </section>
  `
})
export class ShowcaseComponent {
  @Input() items: any[] = [];
}
