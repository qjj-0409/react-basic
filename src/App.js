// 项目的根组件
// App -> index.js -> public/index.html(root)
const list = [
  { id: 1001, name: 'Vue' },
  { id: 1002, name: 'React' },
  { id: 1003, name: 'Angular' },
]
function App() {
  return (
    <div className="App">
      this is app
      {/* 渲染列表 */}
      <ul>
        {/* 注意：加上一个独一无二的key */}
        {/* key的作用：React框架内部使用，提升更新性能 */}
        { list.map(item => <li key={item.id}>{item.name}</li>) }
      </ul>
    </div>
  );
}

export default App;
