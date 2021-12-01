import './App.css';

import TodoListSidebar from './Components/TodoListSidebar';
import Tasks from './Components/Tasks/Tasks';
import Layout from './Components/Layout';
import Today from './Components/Today/Today';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './App/store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <TodoListSidebar />
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path='today' element={<Today />} />
            <Route path='todo-list/:id' element={<Tasks />} />
          </Route>
        </Routes>
    </div>
    </Provider>
  );
}

export default App;
