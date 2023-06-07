import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {interval, map} from "rxjs";
import {Response} from "./response";
import {DataService} from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currencyData: Response | undefined = undefined
  oldCurrencyData: Response | undefined = this.currencyData

  currencyData$ = this.dataService.getData()
    .pipe(map(data => this.dataService.parseData(data)));
  currentTime: string | null = this.getCurrentTime();

  displayElements = false

  constructor(
    private datepipe: DatePipe,
    private dataService: DataService
  ) {
    this.dataService.getData().subscribe(data => {
      this.currencyData = this.dataService.parseData(data)
    })
  }

  ngOnInit(): void {
    interval(1000).subscribe(() => {
      this.getCurrentTime()
    });
    interval(5000).subscribe(async () => {
      this.oldCurrencyData = this.currencyData
      this.dataService.getData().subscribe(data => {
        this.currencyData = this.dataService.parseData(data)
      })
    });
  }

  getCurrentTime(): string | null {
    this.currentTime = this.datepipe.transform((new Date), 'dd.MM.yyyy, H:mm:ss');
    return this.currentTime
  }
}
