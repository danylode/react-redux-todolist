import './App.css';

import TodoListSidebar from './Components/TodoListSidebar';
import Tasks from './Components/Tasks/Tasks';
import Layout from './Components/Layout';
import Today from './Components/Today/Today';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <TodoListSidebar />
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path='today' element={<Today />}/>
          <Route path='todo-list/:id' element={<Tasks />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
