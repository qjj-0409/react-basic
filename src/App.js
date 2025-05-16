// 子传父
// 核心：在子组件中调用父组件中的函数并传递实参

import { useState } from "react";

function Son({ onGetSonMsg }) {
  // Son组件中的数据
  const sonMsg = 'this is som msg';
  return (
    <div>
      this is son
      <button onClick={() => onGetSonMsg(sonMsg)}>sendMsg</button>
    </div>
  )
}

const App = () => {
  const [msg, setMsg] = useState('')
  const getMsg = (msg) => {
    console.log(msg)
    setMsg(msg)
  }
  return (
    <div className="app">
      this is app, {msg}
      <Son onGetSonMsg={getMsg} />
    </div>
  )
}

export default App