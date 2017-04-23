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

const App = (helloMessage) => {
  return (
      <div>
        <Header message="App" />
        <div>
        {
          <h1>{helloMessage}</h1>
        });
        </div>
     </div>
  );
}

ReactDOM.render(
  <App helloMessage = "Hello Message"/>,
    document.getElementById('root')
);

