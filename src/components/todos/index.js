import React from 'react';

export const Todos = ({todos, type, ...action}) => {

    return (
        <React.Fragment>
            {todos.map(todo => (
                <div className='todo' key={todo.id}>
                    <div className='mainInfo'>
                        {type !== 'deleted' &&
                            <input
                                className='checkbox'
                                checked={todo.isCompleted}
                                type="checkbox"
                                onChange={() => action.toggleCompleted(todo.id)}/>
                        }
                        <p className={todo.isCompleted ? 'completed title' : 'title'}>{todo.title}</p>
                    </div>
                    {type !== 'deleted' ?
                        <div className='actions'>
                            <div>
                                <label htmlFor="favorite">Favorite</label>
                                <input
                                    className='checkbox'
                                    id='favorite'
                                    checked={todo.isFavorite}
                                    type="checkbox"
                                    onChange={() => action.toggleFavorite(todo.id)}
                                />
                            </div>
                            <button className='delete' onClick={() => action.deleteTodo(todo.id)}>delete todo</button>
                        </div> :
                        <button className='delete' onClick={() => action.deleteTodo(todo.id)}>Return todo</button>
                    }
                </div>
            ))}
        </React.Fragment>
    );
};