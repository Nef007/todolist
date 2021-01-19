import React from "react";

import listSvg from "./assets/img/menu.svg";
import AddSvg from "./assets/img/plus.svg";

import List from "./components/List/List";
import AddList from "./components/AddList/AddList";


function App() {
  return (
    <div className="todo">
      <div className="todo_sidebar">
          <List items={[
              {
                  icon: listSvg,
                  name: "Все задачи",
                  active: true

              },

          ]}/>
          <List items={[
              {
                  color: 'green',
                  name: "Покупки"

              },
              {
                  color: 'blue',
                  name: "Фронтенд"

              },
              {
                  color: 'pink',
                  name: "Фильмы и сериалы"

              },

          ]}
          isRemovable
          />
          <AddList/>

    </div>
        <div className="todo_tasks">

    </div>
    </div>
  );
}

export default App;
