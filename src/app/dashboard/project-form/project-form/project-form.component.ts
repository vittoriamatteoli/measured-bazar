import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss',
})
export class ProjectFormComponent {
  @Output() projectAdded = new EventEmitter<{
    name: string;
    capacity: number;
  }>();

  projectForm: FormGroup;
  isOpen = false;

  constructor(private formBuilder: FormBuilder) {
    this.projectForm = this.formBuilder.group({
      name: ['', Validators.required],
      capacity: [1, [Validators.required, Validators.min(1)]],
    });
  }

  openModal() {
    this.isOpen = true;
  }
  closeModal() {
    this.isOpen = false;
    this.projectForm.reset();
  }

  onSubmit() {
    if (this.projectForm.valid) {
      this.projectAdded.emit(this.projectForm.value);
      this.closeModal();
    }
  }
}
