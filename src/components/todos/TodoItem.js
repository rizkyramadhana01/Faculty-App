import React from 'react';

function TodoItem({ todo, dispatch }) {
  return (
    <div className="bg-info text-white border border-3 d-flex justify-content-between">
      <input className="" type="checkbox" onChange={() => dispatch({ type: 'flip', payload: {id : todo.id} })} />
      <span style={{ textDecoration: todo.complete ? 'line-through' : 'none'}}>{todo.text}</span>      
      <button className="bg-dark text-white" type="Submit" onClick={() => dispatch({ type: 'delete', payload: {id : todo.id}})}><i className="bi bi-trash-fill"></i></button>
    </div>

    // <table className="table table-striped">
    //   <tbody>
    //     <tr>
    //       <td><input className="" type="checkbox" onChange={() => dispatch({ type: 'flip', payload: { id: todo.id } })} /></td>
    //       <td><span style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>{todo.text}</span></td>
    //       <td><button className="bg-dark text-white" type="Submit" onClick={() => dispatch({ type: 'delete', payload: { id: todo.id } })}><i className="bi bi-trash-fill"></i></button></td>
    //     </tr>
    //   </tbody>
    // </table>
  );
}

export default TodoItem;