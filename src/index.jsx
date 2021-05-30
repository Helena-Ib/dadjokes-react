import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import { jokes } from './jokes.js';
import Joke from './Joke';

const App = () => {
  const [joke, setJoke] = useState(jokes);

  const update = (id) => {
    setJoke(id);
  };

  return (
    <div className="container">
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
          handleUpdate={update}
        />
      ))}
    </div>
  );
};

render(<App />, document.querySelector('#app'));
