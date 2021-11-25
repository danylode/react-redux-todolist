import React from 'react'
import { Outlet, Link} from 'react-router-dom'

export default function EmptyComponent() {
    return (
        <div id='App'>
            <nav id='links'>
                <Link to='todo-task/16'>Task lis 16</Link>
                <Link to='todo-task/17'>Task lis 17</Link>
            </nav>
            <Outlet />
        </div>
    )
}
