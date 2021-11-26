import React from 'react'
import { NavLink } from 'react-router-dom';

export default function List(props) {
    let list = props.list;
    let setActive = (event) => event.isActive? " date-red": "";

    return (
        <ul>
            <NavLink className={setActive} to={'todo-list/' + list.listId}>{list.listId + " " + list.title + ": " + list.listTaskCount}</NavLink>
        </ul>
    )
}
