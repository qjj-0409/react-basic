// 父传子
// 1.父组件传递数据 子组件标签上绑定属性
// 2.子组件接收数组 props的参数

function Son(props) {
  // props：对象里面包含了父组件传递过来的所有的数据
  console.log(props)
  return <div>this is son, {props.name}, jsx: {props.child}</div>
}

const App = () => {
  const name = 'this is app name';
  return (
    <div className="app">
      <Son 
        name={name}
        age={18}
        isTrue={false}
        cb={() => { console.log('123') }}
        list={['Vue', 'React']}
        obj={{name: 'jack'}}
        child={<span>this is span</span>}
      />
    </div>
  )
}

export default App