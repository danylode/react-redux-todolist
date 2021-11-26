import React, { useState, useEffect } from 'react';

import List from './List';
import serverMethods from '../serverMethods';
import { Link } from 'react-router-dom';

export default function TodoListSidebar() {
    let [lists, setLists] = useState([]);

    useEffect(() => {
        serverMethods.getDashboard().then((data) => setLists(data));
    })

    return (
        <div id="todolist-sidebar">
            <nav id="links">
                <Link to="today">Today</Link>
            </nav>
            <li>
                {
                    lists.map((list) => <List key={list.listId} list={list}/>)
                }
            </li>
        </div>
    )
}
