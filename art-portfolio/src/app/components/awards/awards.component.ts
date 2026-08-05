import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwardItem } from '../../services/art.service';

@Component({
  selector: 'app-gallery-awards',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="space-y-8 font-serif max-w-2xl mx-auto w-full text-center border-t border-[#96938d]/20 pt-12">
      <h2 class="text-xl uppercase tracking-[0.25em] text-[#f5f2eb] font-sans font-bold">Honors & Awards</h2>
      <div class="space-y-8 w-full">
        @for (award of awards; track award.title) {
          <div class="flex flex-col items-center">
            <h3 class="text-base font-medium text-[#fbfafa] font-serif">{{ award.title }}</h3>
            <p class="text-xs text-[#dfdac2] tracking-widest uppercase font-sans mt-1 font-light">
              {{ award.issuer }} &bull; {{ award.date }}
            </p>
            <p class="text-sm text-[#eae7e0]/80 font-serif mt-2 max-w-xl italic leading-relaxed">
              "{{ award.description }}"
            </p>
          </div>
        }
      </div>
    </section>
  `
})
export class AwardsComponent {
  @Input() awards: AwardItem[] = [];
}
