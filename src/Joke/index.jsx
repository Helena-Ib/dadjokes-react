import React, { useState } from 'react';

import './style.css';

const Joke = ({
  id,
  userAvatar,
  userName,
  text,
  likes,
  dislikes,
  handleUpdate,
}) => {
  // const [upLikes, setUplikes] = useState(0);
  // const [downLikes, setDownLikes] = useState(0);

  const handleClickUp = () => {
    handleUpdate(id);
  };

  const handleClickDown = () => {
    handleUpdate(id);
  };

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img
            className="user-avatar"
            src={`https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/${userAvatar}`}
          />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          onClick={handleClickUp}
          id="btn-up"
          className="btn-like btn-like--up"
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {likes}
        </span>
        <button
          onClick={handleClickDown}
          id="btn-down"
          className="btn-like btn-like--down"
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {dislikes}
        </span>
      </div>
    </div>
  );
};

export default Joke;
