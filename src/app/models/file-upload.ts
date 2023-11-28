export class FileUpload {
  key!: string;
  name!: string;
  url!: string;
  file: File;
  extension!: string;
  pointCloud!: Number;
  createdDate!: string;
  modifiedDate!: string;
  isActive!: boolean;

  constructor(file: File) {
    this.file = file;
  }
}
