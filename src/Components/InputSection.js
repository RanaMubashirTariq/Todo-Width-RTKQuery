import React , {useState} from 'react'
import './InputSection.css';
import{ useGetTodoQuery, useAddTodoMutation}from "./RTKQuery/ApiSlice";



export default function InputSection(props) {

  const { data: list, isLoading, error, refetch } = useGetTodoQuery();
  const [addTodo] = useAddTodoMutation();


    const [text,setText] = useState('');
    const handleChange = (e) =>{
        setText(e.target.value)
    }

    const addTask = () =>{
        props.addList(text);
        setText('');
        refetch();
    }

  return (
        <div className='row'>

            <input type="input" value={text} placeholder='Enter your Text' onChange={handleChange}/>

            <button onClick={addTask}>Add</button>
    </div>
  )
}
