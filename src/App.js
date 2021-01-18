import './App.css';
import listSvg from './assets/img/menu.svg'

function App() {
  return (
    <div className="todo">
      <div className="todo_sidebar">
            <ul className="todo_list">
                <li className="active">
                    <i>
                        <img src={listSvg} alt="list icon"/>
                    </i>
                    <span>Все задачи</span>
                </li>

            </ul>
    </div>
        <div className="todo_tasks">

    </div>
    </div>
  );
}

export default App;
