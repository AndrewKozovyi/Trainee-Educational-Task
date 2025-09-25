import {ChangeDetectorRef, Component, ElementRef, inject, Input, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-custom-file-loader',
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CustomFIleLoader
    }
  ],
  templateUrl: './custom-file-loader.html',
  styleUrl: './custom-file-loader.scss'
})
export class CustomFIleLoader implements ControlValueAccessor {
  @Input() formControlName!: string;

  cdr = inject(ChangeDetectorRef);

  uploadedFile: any;
  fileUrl: any;
  disabled = false;

  @ViewChild('fileUpload') public fileInput!: ElementRef;

  onChange: OnChangeFunction<string> = () => {}
  onTouch: OnTouchFunction = () => {};

  writeValue(value: string): void {
    this.uploadedFile = value;
    this.fileUrl = value
  }

  registerOnChange(fn: OnChangeFunction<string>): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouchFunction): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onFileUploaded(event: any) {
    const uploadedFile = event.target.files.item(0);

    if (uploadedFile) {
      this.uploadedFile = uploadedFile;
      this.previewFile();
    }
  }

  private previewFile() {
    let reader = new FileReader();

    reader.onload = (event: any) => {
      this.fileUrl = event.target.result;
      this.onChange(this.fileUrl);
      this.cdr.markForCheck();
    }

    reader.readAsDataURL(this.uploadedFile);
  }

  clearImg() {
    if (this.fileInput) {
      this.fileInput.nativeElement.value = null;
      this.uploadedFile = null;
      this.fileUrl = null;
      this.onChange(this.fileUrl);
    }
  }
}
