import {Component, inject} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {CustomFIleLoader} from '../custom-file-loader/custom-file-loader';
import {CustomRating} from '../custom-rating/custom-rating';
import {Review} from '../../service/review';

@Component({
  selector: 'app-custom-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CustomFIleLoader,
    CustomRating
  ],
  templateUrl: './custom-form.html',
  styleUrl: './custom-form.scss'
})
export class CustomForm {
  fb = inject(FormBuilder);
  reviewService = inject(Review);

  form: FormGroup = this.fb.group({
    description: ['', [Validators.required]],
    rating: [0, [Validators.required]],
    file: ['', [Validators.required]],
  });

  onSubmit() {
    if (this.form.invalid) { return; }

    const newReview = {
      description: this.form.value.description,
      file: this.form.value.file,
      rating: this.form.value.rating
    }

    this.reviewService.createReview(newReview);
  }
}
