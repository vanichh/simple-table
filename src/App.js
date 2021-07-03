import React, { useState, useEffect } from 'react';
import './style.css';
import Table from './Comp.js';
import Create from './Create.js';

export default function App() {
  const obj = [
    { state: true, name: 'apple', price: 50, sum: 3 },
    { state: true, name: 'pear', price: 40, sum: 7 },
    { state: true, name: 'peach', price: 20, sum: 4 }
  ];
  const [state, setstate] = useState(obj);
  const name = ['Состояние', 'Название', 'Цена', 'Кол-во', 'Всего', 'Ред.'];
  let CalcSum = state
    .filter(elem => elem.state)
    .reduce((sum, current) => sum + current.sum * current.price, 0);

  return (
    <table>
      <tbody>
        <tr>
          {name.map((elem, index) => (
            <td key={index}>{elem}</td>
          ))}
        </tr>
        <Table list={state} set={setstate} />
        <tr>
          <td colSpan={name.length}>Всего: {CalcSum}</td>
        </tr>
        <Create set={setstate} />
      </tbody>
    </table>
  );
}
