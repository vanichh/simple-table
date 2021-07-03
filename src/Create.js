import React from 'react';
import './style.css';
export default function Create(props) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const add = () => {
    props.set(elem => {
      const res = {
        state: true,
        name: 'peach',
        price: getRandomInt(1, 50),
        sum: getRandomInt(1, 5)
      };
      return [...elem, res];
    });
  };
  return (
    <tr>
      <td colSpan="6">
        <button onClick={add} className="create">
          Добавить
        </button>
      </td>
    </tr>
  );
}
