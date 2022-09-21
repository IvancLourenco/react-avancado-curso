import { useState } from "react"


const ListRender = () => {
    const [list] = useState(["ivan","kamila", "fabiana","geni"])

    const [users, setUsers] = useState([
        {id : 1 , name: "Ivan", age: "23"},
        {id : 2 , name: "Kamila", age: "23"},
        {id : 3 , name: "Fabiana", age: "38"},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
           
        <ul>
        {users.map((user) =>(
                <li key={user.id}> {user.name} - {user.age} </li>
            ))}
        </ul>
        
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender