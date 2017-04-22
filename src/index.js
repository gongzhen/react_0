import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ message }) => {
  return (
      <h2 className = "text-center">
        {message}
      </h2>
      );
}

Header.propTyles = {
  message:React.PropTypes.string
}

const App = () => {
  var names = ['Chris', 'Emily', 'Kate'];
  var arr = [
    <h1>Hello world!</h1>,
    <h2>React is awesome</h2>
  ];
  return (
      <div>
        <Header message="App" />
        <div>
        {
          arr.map((name,index) => {
            return <div>{index}:{name}</div>
          })
        }
        </div>
     </div>
      );
}

ReactDOM.render(
  <App />,
    document.getElementById('root')
);

