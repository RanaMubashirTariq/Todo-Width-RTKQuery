import React , { useState} from 'react'
import InputSection from './InputSection';
import ListSection from './ListSection';
import{ useGetTodoQuery, useAddTodoMutation, useDeleteTodoMutation }from "./RTKQuery/ApiSlice";
import './TodoBox.css';


export default function TodoBox() {


        const { data : list , isLoading , error , refetch} = useGetTodoQuery();

          console.log(list)  

        const [addTodo] = useAddTodoMutation();
        const [deleteTodo] = useDeleteTodoMutation();

    const [msg,setMsg] = useState();

    const addList = async (text) =>{
      if(text === ''){
        alert("Please add Something")
      }
      else{
        await addTodo(text);
        setMsg(alert("Your added a Task !"))
      }
    }

     const deleteItem = async (id) => {
      await deleteTodo(id)
      refetch();
     }


     if (isLoading) {
            return <p>Loading...</p>;
     }


     if (error) {
       return <p>Error: {error.message}</p>;
     } 



  return (
        <div className="main-container">
                <div className="box-container">
                        <InputSection addList={addList}/>
                        <hr/>
                        {list.map((listItem)=>{
                        return(
                            <ListSection   key={listItem.id} item={listItem}  delete={() => deleteItem(listItem.id)} />   
                          )
                        })}
                </div>
    </div>
  )
}
