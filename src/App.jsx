import {useState} from "react";
import "./App.css"

function App() {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState(1);
  const [users, setUsers] = useState([]);
  const [successClassName, setsuccessClassName] = useState("success")
  function handleClick(){

    if(!login || !password){

      setsuccessClassName("fail start")
      setTimeout(() => {setsuccessClassName("fail back")}, 1000)

      return;
    }

    setsuccessClassName("success start")
    setTimeout(() => {setsuccessClassName("success back")}, 1000);

    const user = {
      login: login,
      password: password,
      id: id
    }
    setId(id + 1)
    setUsers((item) => [...item, user])
  }

  return (
  <div>

    <div className={successClassName} >
      {successClassName == "success" || successClassName == "success start" || successClassName == "success back" ? "Успешно!" : "Упс!"}
    </div>

    <div className="form">

      <input
        value={login}
        onChange={(e) => {setLogin(e.target.value)}}
        placeholder="Логин"
        type="text"
        name="login"/>

      <input
        value={password}
        onChange={(e) => {setPassword(e.target.value)}}
        placeholder="Пароль"
        type="text"
        name="password"/>

      <button onClick={handleClick}>Добавить</button>

    </div>

    {users.map((user) =>
        <div className="user-block" key={user.id}>Логин: {user.login}<br/>Пароль: {user.password}<br/>Id: {user.id}</div>
    )}
  </div>
  );
}


export default App;
