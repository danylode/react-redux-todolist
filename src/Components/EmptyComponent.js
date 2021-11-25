import React from 'react'
import { Outlet, Link} from 'react-router-dom'
import TodoListSidebar from './TodoListSidebar'

export default function EmptyComponent() {
    return (
        <div id='App'>
            <TodoListSidebar />
            <Outlet />
        </div>
    )
}
