// 1.通过子传父 A -> App
// 2.通过父传子 App -> B

import { useState } from "react"

const A = ({ onGetName }) => {
  const name = 'this is A name'
  return (
    <div>
      this is A component.
      <button onClick={() => onGetName(name)}>send</button>
    </div>
  )
}

const B = ({ name }) => {
  return (
    <div>
      this is B component.
      {name}
    </div>
  )
}


const App = () => {
  const [name, setName] = useState('')
  const getName = (name) => {
    console.log(name)
    setName(name);
  }
  return (
    <div>
      this is App.
      <A onGetName={getName} />
      <B name={name} />
    </div>
  )
}

export default App