import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  upload(file: File):  Observable<any> {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "AutoSales")
      formData.append("cloud_name", "dtdz0i6at")
      return this.http.post<any>("https://api.cloudinary.com/v1_1/dtdz0i6at/auto/upload", formData);
  }
}
