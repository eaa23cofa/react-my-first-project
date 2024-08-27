import { useEffect, useState } from "react";
import "./App.css";
import User from "./components/User";

function App() {
  const [users, SetUsers] = useState([
    { name: "Consuelo", mail: "consuelo@gmail.com", image:"public/image.webp"},
  ]);
  console.log(users);

  useEffect(() => {
    //Fetch data from API
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const response = await fetch(
      "https://raw.githubusercontent.com/cederdorff/race/master/data/users.json"
    );
    const data = await response.json();
    setUsers(data);
  }

  return (
    <main className="app">
      <h1>Users</h1>

      <section className="grid">
        {users.map((user) => (
          <User key={user.id} name={user.name} mail={user.mail} image={user.image} />
        ))}
      </section>
    </main>
  );
}

export default App;
