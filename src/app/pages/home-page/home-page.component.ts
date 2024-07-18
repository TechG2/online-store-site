import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  reviews: { name: string; message: string }[] = [
    {
      name: 'Simon',
      message: 'Very Good!',
    },
    {
      name: 'Emily',
      message: 'Highly Satisfied!',
    },
    {
      name: 'Jonny',
      message: 'satisfied!',
    },
    {
      name: 'Sarah',
      message: 'Great Service',
    },
    {
      name: 'David',
      message: 'Extremely Pleased',
    },
    {
      name: 'Alice',
      message: 'Highly Recommended',
    },
  ];
  newsLetterForm = new FormGroup<{ email: FormControl<string | null> }>({
    email: new FormControl<string | null>('', [
      Validators.required,
      Validators.email,
    ]),
  });

  faChevronDown = faChevronDown;

  faCircle = faCircle;
  faFaceBook = faFacebook;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faXTwitter = faXTwitter;
  faTiktok = faTiktok;

  constructor() {}

  // func
  downArrowClick(): void {
    const review = document.getElementById('reviews-container')!;

    review.scrollIntoView({ behavior: 'smooth' });
  }
}
