import { ColumnSettings } from 'handsontable/settings';

export const baseData = [
  ['Plat', 'AM', '', '', '', ''],
  ['Plat', 'PM', 400, '', '', ''],
  ['', '', '', ''],
  ['Pall', 'AM', '', '', '', ''],
  ['Pall', 'PM', '', '', '', ''],
  ['', '', '', '', '', ''],
  ['Gold', 'PM', '', '', '', ''],
  ['Gold', 'PM', '', '', '', ''],
  ['', '', '', '', '', ''],
  ['Silver', 'Fix', '', '', '', ''],
  ['', '', '', '', '', ''],
  ['Execution Date', '08-Feb-23', '', '', '', ''],
  ['Value Date', 'Spot', '', '', '', ''],
];

export const cols: ColumnSettings[] = [
  { title: 'Metal', readOnly: true },
  { title: 'Fix' },
  { title: 'Buy' },
  { title: 'Sell' },
  { title: 'Price' },
  { title: 'Rate' },
];
