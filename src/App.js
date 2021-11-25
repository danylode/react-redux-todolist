import './App.css';
import React, { useState, useEffect } from 'react';

import TodoListSidebar from './Components/TodoListSidebar';
import Tasks from './Components/Tasks/Tasks';
import EmptyComponent from './Components/EmptyComponent';
import CreateTaskForm from './Components/Tasks/CreateTaskForm';
import serverMethods from './serverMethods';
import { Route, Routes } from 'react-router-dom';

function App() {
  let [todoLists, setTodoLists] = useState([]);
  let [allTasks, setAllTasks] = useState([]);
  let [currentListId, setCurrentListId] = useState(0);

  let changeList = (listId) => {
    setCurrentListId(listId);
  }

  let addTask = (listId, task) => {
    serverMethods.postMethod(listId, task).then((data) => setAllTasks(data));
  }

  let deleteTask = (taskId) => {
    serverMethods.deleteMethod(taskId).then((data) => setAllTasks(data));
  }

  let patchDoneState = (task) => {
    serverMethods.patchMethod(task).then((data) => setAllTasks(data));
  }

  //Get Lists
  useEffect(() => {
    serverMethods.getListsMethod().then((data) => setTodoLists(data));
    serverMethods.getTasksMethod().then((data) => {
      if (data != null) {
        setAllTasks(data);
        /*let minListId = () => {
          return data.map((x) => {x.listId});
        }
        //console.log(minListId());*/
        setCurrentListId(data[0].taskListId);
      }
    });
  }, [])

  return (
    <div></div>
  );
}

export default App;
