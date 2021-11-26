import React, { useState, useEffect } from 'react';

import List from './List';
import serverMethods from '../serverMethods';
import { NavLink } from 'react-router-dom';

export default function TodoListSidebar() {
    let [lists, setLists] = useState([]);
    const setActive = (event) =>  (event.isActive ? " date-red": "");

    useEffect(() => {
        serverMethods.getDashboard().then((data) => setLists(data));
    }, [])

    return (
        <div id="todolist-sidebar">
            <nav id="links">
                <NavLink className={setActive} to="today">Today</NavLink>
            </nav>
            <li>
                {
                    lists.map((list) => <List key={list.listId} list={list}/>)
                }
            </li>
        </div>
    )
}
