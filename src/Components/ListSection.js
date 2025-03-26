import React from 'react'
import './ListSection.css';

export default function ListSection({ item, delete: deleteTodo }) {

  return (
      <div className='list-section-div'>
        <ul>
            <li className='list-item'>
            {item.text}
                <span className='icons'><i className="fa-solid fa-trash-can" onClick={deleteTodo} /></span>
            </li>
          </ul>
    </div>
  )
}

