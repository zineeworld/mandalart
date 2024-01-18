import './App.scss'
import {MandalartList} from "./components/MandalartList.tsx";

function App() {
  const data1 = ['','','','','','','','','']
  const data2 = ['','','','','','','','','']
  const data3 = ['','','','','','','','','']
  const data4 = ['','','','','','','','','']
  const data5 = ['','','','','','','','','']
  const data6 = ['','','','','','','','','']
  const data7 = ['','','','','','','','','']
  const data8 = ['','','','','','','','','']
  const data9 = ['','','','','','','','','']

  return (
    <div className="ma-wrapper">
      <div className="ma-inner">
        <h1 className="ma-title">Mandalart</h1>
        <div className="ma-area">
          <MandalartList data={data1} />
          <MandalartList data={data2} />
          <MandalartList data={data3} />
          <MandalartList data={data4} />
          <MandalartList data={data5} />
          <MandalartList data={data6} />
          <MandalartList data={data7} />
          <MandalartList data={data8} />
          <MandalartList data={data9} />
        </div>
      </div>
    </div>
  )
}

export default App
