import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  http = inject(HttpClient);
  isChecked: boolean = false;
  mailTest: boolean = false;
  feedbackMessage: string = '';
  feedbackType: 'success' | 'error' | '' = '';

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  post = {
    endPoint: 'https://www.aldin-dobric.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'text' as const,
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(
          this.post.endPoint,
          this.post.body(this.contactData),
          this.post.options
        )
        .subscribe({
          next: (response) => {
            this.feedbackMessage = 'Message sent successfully!';
            this.feedbackType = 'success';
            ngForm.resetForm();
          },
          error: (error) => {
            this.feedbackMessage =
              'Message could not be sent. Please try again.';
            this.feedbackType = 'error';
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
    setTimeout(() => {
      this.feedbackMessage = '';
      this.feedbackType = '';
    }, 4500);
  }
}
