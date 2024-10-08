import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingServiceService {


  public loadingService:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  constructor() { }
}
