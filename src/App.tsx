import { useEffect, useRef } from 'react';

import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
registerAllModules();

import 'handsontable/dist/handsontable.full.min.css';
import { baseData, cols } from './tableDetails';

function App() {
  const hotRef = useRef(null);

  useEffect(() => {});

  return (
    <div className='App'>
      <h1>hello world</h1>
      <HotTable
        ref={hotRef}
        data={baseData}
        columns={cols}
        height='auto'
        licenseKey='non-commercial-and-evaluation'></HotTable>
    </div>
  );
}

export default App;
