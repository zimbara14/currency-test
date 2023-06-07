import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.css']
})
export class CurrencyCardComponent {

  @Input() value: number | undefined
  @Input() oldValue: number | undefined
  @Input() name!: string

  isPositive: boolean = true
  isZero: boolean = true
  difference: number = this.calcDifference()

  calcDifference() {
    if(this.value === this.oldValue) return 0.00
    const ans = this.value! - this.oldValue!
    this.isPositive = !!Math.sign(ans);
    return ans
  }
}
