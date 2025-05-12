// 1.定义组件
function Button() {
  // 业务逻辑组件逻辑
  return <button>click me!</button>
}

function App() {
  return (
    <div className="App">
      {/* 2.使用组件（渲染组件） */}
      {/* 自闭和 */}
      <Button />
      {/* 成对出现 */}
      <Button></Button>
    </div>
  );
}

export default App;
