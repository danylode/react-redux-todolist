import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
    return (
        <div id="tasks">
            <Outlet />
        </div>
    )
}
