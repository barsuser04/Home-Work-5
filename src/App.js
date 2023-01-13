import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import UserForm from "./components/NewUser/UserForm";

function App() {
  const [user, SetUser] = useState([
    
  ]);

  const addNewUserHandler = (data) => {
    const upDateUser = [...user];
    upDateUser.push(data);
    SetUser(upDateUser);
  };

  user.sort((a,b) => {
    return b.year - a.year
  })
  return (
    <div>
      <div className="App">
        <UserForm onNewExpenseAdd={addNewUserHandler}/>
      </div>

      <div className="app-2">
        <Expenses expenses={user} />
      </div>
    </div>
  );
}

export default App;
