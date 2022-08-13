import {useEffect, useState} from 'react'
import {v4 as uuid} from 'uuid';

export const useTodo = () => {
    const [todos, setTodos] = useState({})

    useEffect(() => {
        const localStorageTodos = localStorage.getItem('todos')

        if (localStorageTodos) {
            setTodos(JSON.parse(localStorageTodos))
        }
    }, [])

    useEffect(() => {
            if (Object.values(todos).length) {
                localStorage.setItem('todos', JSON.stringify(todos))
            }
        }, [todos]
    )

    const addTodo = (title) => {
        const id = uuid()
        setTodos({
            ...todos,
            [id]: {
                id,
                title: title,
                isFavorite: false,
                isCompleted: false,
                isDeleted: false,
                createdAt: new Date(),
            },
        })
    }

    const toggleFavorite = (id) => {
        setTodos({
            ...todos,
            [id]: {...todos[id], isFavorite: !todos[id].isFavorite}
        })
    };

    const deleteTodo = (id) => {
        setTodos({
            ...todos,
            [id]: {...todos[id], isDeleted: !todos[id].isDeleted}
        })
    };

    const toggleCompleted = (id) => {
        setTodos({
            ...todos,
            [id]: {...todos[id], isCompleted: !todos[id].isCompleted}
        })
    };

    const getDeletedTodos = () => Object.values(todos).filter(todo => todo.isDeleted);
    const getFavoriteTodos = () => Object.values(todos).filter(todo => todo.isFavorite);
    const getCompletedTodos = () => Object.values(todos).filter(todo => !todo.isDeleted && todo.isCompleted)

    const getSortedTodos = () => Object.values(todos).sort(todo => {
        console.log('todo', todo.createdAt)
        return new Date(todo.createdAt).getTime() ? -1 : 1
    });


    return {
        todos: getSortedTodos(),
        addTodo,
        toggleFavorite,
        deleteTodo,
        toggleCompleted,

        getDeletedTodos,
        getFavoriteTodos,
        getCompletedTodos,
    }
}