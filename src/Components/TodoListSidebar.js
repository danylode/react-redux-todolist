import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import List from './List';
import serverMethods from '../serverMethods';

export default function TodoListSidebar() {
    let [lists, setLists] = useState([]);

    useEffect(() => {
        serverMethods.getListsMethod().then((data) => setLists(data));
    })

    return (
        <div id="todolist-sidebar">
            {
                lists.map((list) => <Link to={'todo-task/' + list.listId} key={list.listId}>{list.title}</Link>)
            }
        </div>
    )
}
