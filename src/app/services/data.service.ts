import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get("https://api.exchangerate.host/latest?base=RUB");
  }

  parseData(data: any) {
    return {
      EUR: data.rates.EUR as number,
      USD: data.rates.USD as number,
      GBP: data.rates.GBP as number,
      CNY: data.rates.CNY as number,
      JPY: data.rates.JPY as number,
      TRY: data.rates.TRY as number
    }
  }
}
