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
  return (
      <div>
        <Header message="App" />
        <div>
          <h1>Hello, world!</h1>
          {
            names.map(function (name, i){
              return <div key={i}>Hello, {name}!</div>
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

