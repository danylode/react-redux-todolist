import React from 'react'
import { Link } from 'react-router-dom';

export default function List(props) {
    let list = props.list;

    return (
        <ul>
            <Link to={'todo-list/' + list.listId}>{list.listId + " " + list.title + ": " + list.listTaskCount}</Link>
        </ul>
    )
}
