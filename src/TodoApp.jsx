import { useDispatch, useSelector } from "react-redux"
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi"
import { useState } from "react"

export default function TodoApp() {
    const [ todoId, setTodoId ] = useState()
    const { data, isLoading } = useGetTodosQuery()
    const { data: dataTodo,  } = useGetTodoQuery(todoId)
  return (
    <>
        <h1>Todo - RTK Query</h1>
        <hr />

        {isLoading ? <h4>Is Loading ....</h4> : (
            <>
            <div style={{
                display: 'flex'
            }}>

            <div>

                <button>
                    Next todo
                </button>
                <ul>
                    {data.map( todo => 
                        <li 
                        key={todo.id}
                        style={{
                            color: todo.completed ? 'gray' : '',
                            textDecoration: todo.completed ? 'line-throught' : '',
                            textAlign: 'left',
                            cursor: 'pointer'
                        }}
                        onClick={() => setTodoId(todo.id)}
                        >{todo.title}</li>
                    )}
                </ul>
                    </div>

                    {/* Show Todo */}

                    <div>
                        {dataTodo && (
                            <p>{dataTodo.title}</p>

                        )}
                    </div>

            </div>

            </>
        )}
        
    </>
  )
}
