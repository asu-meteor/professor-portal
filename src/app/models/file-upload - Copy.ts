export class FileUpload {
  key!: string;
  name!: string;
  url!: string;
  file: File;
  extension!: string;
  pointCloud!: Number;
  createdDate!: string;
  modifiedDate!: string;
  isActive!: Boolean;

  constructor(file: File) {
    this.file = file;
  }
}
