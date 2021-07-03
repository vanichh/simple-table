import React from 'react';
export default function Table(props) {
  let del = i => {
    props.set(elem =>
      elem.filter((elem, index) => {
        return index != i;
      })
    );
  };
  let changeCkbox = i => {
    props.set(elem =>
      elem.map((elem, index) => {
        if (index == i) {
          elem.state ? (elem.state = false) : (elem.state = true);
        }
        return elem;
      })
    );
  };
  return (
    <>
      {props.list.map((elem, index) => {
        return (
          <tr key={index}>
            <td>
              <input
                onChange={changeCkbox.bind(null, index)}
                type="checkbox"
                defaultChecked
              />
            </td>
            <td>{elem.name}</td>
            <td>{elem.price}</td>
            <td>{elem.sum}</td>
            <td>{elem.sum * elem.price}</td>
            <td>
              <button onClick={del.bind(null, index)}>Удалить</button>
            </td>
          </tr>
        );
      })}
    </>
  );
}
