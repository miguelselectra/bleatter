import { useState } from 'react';

export default function BleatForm ({ addBleatHandler, userLogged }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message === '') {
      return;
    }
    const bleat = {
      id: Math.trunc(Math.random() * 9999999), // pochisimo provisional x2
      message: message,
      userId: 1
    };
    addBleatHandler(bleat);
    setMessage('');
  }

  if (userLogged === null) {
    return null;
  }

  return (
    <div className='bleat-creator'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="bleat"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button>Create</button>
      </form>
    </div>
  );
}