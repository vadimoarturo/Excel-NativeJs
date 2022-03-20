import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root) {
    super($root, {
      listeners: ['input', 'click'],
    })
  }

  toHTML() {
    return `
    <div class="info">fx</div>
    <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  onInput(event) {
    event.preventDefault()
  }

  onClick(event) {
    event.preventDefault()
  }
}
