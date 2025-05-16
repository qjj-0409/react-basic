// 父传子
// 1.父组件传递数据 子组件标签上绑定属性
// 2.子组件接收数组 props的参数

function Son(props) {
  // props：对象里面包含了父组件传递过来的所有的数据
  console.log(props)
  // props中的数据是只读的
  // props.name = 'hello'
  return <div>this is son, {props.children}</div>
}

const App = () => {
  return (
    <div className="app">
      <Son>
        {/* 当我们把内容嵌套在子组件标签中时，父组件会自动在名为children的props属性中接收该内容 */}
        <span>this is span</span>
      </Son>
    </div>
  )
}

export default App