import { useState } from 'react';

export default function BleatForm ({ addBleatHandler }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message === '') {
      return;
    }
    const bleat = {
      message: message,
      id: Math.random() * 9999999, // pochisimo provisional
      author: 'Yo'
    };
    addBleatHandler(bleat);
    setMessage('');
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