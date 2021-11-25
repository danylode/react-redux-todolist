import React, { useState, useEffect} from 'react';

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
                lists.map((list) => <List key={list.listId} list={list} />)
            }
        </div>
    )
}
