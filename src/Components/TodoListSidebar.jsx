import React, { useEffect } from 'react';

import List from './List';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadDashboard } from '../Actions/asyncActions'

export default function TodoListSidebar() {
    const setActive = (event) => (event.isActive ? " date-red" : "");

    let dispatch = useDispatch();
    let lists = useSelector(x => x.dashboard);

    useEffect(() => {
        dispatch(loadDashboard);
    }, [dispatch])

    return (
        <aside id="todolist-sidebar">
            <nav id="links">
                <NavLink className={setActive} to="today">Today</NavLink>
            </nav>
            <li>
                {
                    lists.map((list) => <List key={list.listId} list={list} />)
                }
            </li>
        </aside>
    )
}
