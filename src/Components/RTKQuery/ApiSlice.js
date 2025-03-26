import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { ref , get , push , remove} from 'firebase/database'
import { db } from "./Firebase.js";


export const todoApi = createApi({
    reducerPath : 'todoApi',
    baseQuery : fakeBaseQuery(),
    endpoints:(builder) =>({
        getTodo : builder.query({
            async queryFn() {
                try {
                    const task = await get(ref(db, "tasks"));
                    console.log("Firebase data:", task.val()); // Debugging log
                    if (task.exists()) {
                        const data = task.val();
                        const taskList = Object.keys(data).map((key) => ({
                            id: key,
                            text: data[key].text,
                        }));
                        return { data: taskList };
                    } else {
                        return { data: [] };
                    }
                } catch (error) {
                    console.error("Error fetching tasks:", error);
                    return { error: error.message };
                }
            }
        }),
        addTodo : builder.mutation({
            async queryFn(newtask){
            try {
                const taskRef = ref(db , 'tasks');
    
                const newTaskRef = await push(taskRef, { text : newtask });
    
                return { data : { id : newTaskRef.key , text : newtask}};
    
            } catch (error) {
                 return { error : error.massage};
            }
            },
        }),

        deleteTodo : builder.mutation({
            async queryFn(id){
                try {
                    await remove(ref(db, `tasks/${id}`));
                    return { data : id };
                } catch (error) {
                     return { error : error.massgae}
                }
            },
        }),
    }),
});


export const { useGetTodoQuery, useAddTodoMutation, useDeleteTodoMutation } = todoApi;