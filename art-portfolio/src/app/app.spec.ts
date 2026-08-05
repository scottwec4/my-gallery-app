import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { App } from './app';
import { GalleryComponent } from './components/gallery/gallery.component';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        GalleryComponent // Import your standalone component into the test runner module
      ],
      declarations: [
        App
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the portfolio owner title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    fixture.detectChanges(); // Force angular lifecycle processing loops
    const compiled = fixture.nativeElement as HTMLElement;

    // Updated to verify your actual deployed branding text
    expect(compiled.querySelector('h1')?.textContent).toContain('Scott Weckbaugh');
  });
});
