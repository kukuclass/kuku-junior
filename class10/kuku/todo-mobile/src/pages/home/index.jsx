import React from 'react';
import TodoItem from '../../components/todo-item'
import './index.scss';

function Home() {

    return (
        <div className="todo-home-container">
            <div className="todo-home-header">
                <div className="icon-home"/>
                <div className="todo-title"/>
            </div>
            <div className="todo-list">
                <div className="todo-item-container">
                    <TodoItem/>
                </div>
                <div className="todo-item-container">
                    <TodoItem/>
                </div>
                <div className="todo-item-container">
                    <TodoItem/>
                </div>
                <div className="todo-item-container">
                    <TodoItem/>
                </div>
                <div className="todo-item-container">
                    <TodoItem/>
                </div>
                <div className="todo-item-container">
                    <TodoItem/>
                </div>
                <div className="todo-item-container">
                    <TodoItem/>
                </div>
                <div className="todo-item-container">
                    <TodoItem/>
                </div>
                <div className="todo-item-container">
                    <TodoItem/>
                </div>
                <div className="todo-item-container">
                    <TodoItem/>
                </div>
                <div className="todo-item-container">
                    <TodoItem/>
                </div>
            </div>
        </div>
    )
}

export default Home;