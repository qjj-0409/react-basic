function App() {
  // const handleClick = (e) => {
  //   console.log('button被点击了', e)
  // }

  // 传递自定义参数
  // const handleClick = (name) => {
  //   console.log('button被点击了', name)
  // }

  // 同时传递自定义参数和事件对象
  const handleClick = (name, e) => {
    console.log('button被点击了', name, e)
  }
  return (
    <div className="App">
      <button onClick={(e) => handleClick('jack', e)}>click me</button>
    </div>
  );
}

export default App;
