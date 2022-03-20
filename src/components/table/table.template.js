const CODES = {
  A: 65,
  Z: 90,
}


function createCell(content) {
  return `
    <div class="cell" contenteditable>${content}</div>
    `
}

function toColumn(col) {
  return `
    <div class="column">${col}</div>
    `
}

function createRow(content, number = '') {
  return `
    <div class="row">
      <div class="row-info">${number}</div>
      <div class="row-data">${content}</div>
    </div>
    `
}

function toChat(_, index) {
  return String.fromCharCode(CODES.A + index)
}


export function createTable(rowsCount = CODES.Z - CODES.A) {
  const colsCount = CODES.Z - CODES.A +1
  const cols = new Array(colsCount)
      .fill('')
      .map(toChat)
      .map(toColumn)
      .join('')

  const cell = new Array(colsCount)
      .fill('')
      .map(createCell)
      .join('')


  const rows = []
  rows.push(createRow(cols))

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(cell, i + 1))
  }

  return rows.join('')
}
