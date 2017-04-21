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
  return (
      <div>
        <Header message="App" />
        <div>
          <h1>Hello, world!</h1>,
        </div>
      </div>
      );
}

ReactDOM.render(
  <App />,  
    document.getElementById('root')
);

