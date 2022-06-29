import React from 'react'
import "./styles.css"
import { Todo } from "../model"
import {SingleTodo} from "./SingleTodo"

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC<Props> = ({todos, setTodos}) => {
    return (
        <div className="container">
            <div className="todos">
                <span className="todos__heading">Active tasks</span>
                      {todos.map((todo) => (
                            <SingleTodo
                                todo={todo}
                                key={todo.id}
                                todos={todos}
                                setTodos={setTodos}
                            />
                        ))}
            </div>
            <div className="todos remove">
                <span className="todos__heading">Completed tasks</span>
                      {todos.map((todo) => (
                            <SingleTodo
                                todo={todo}
                                key={todo.id}
                                todos={todos}
                                setTodos={setTodos}
                            />
                        ))}
            </div>
      </div>
    //   <div className="todos">
    
    //   </div>
  )
}