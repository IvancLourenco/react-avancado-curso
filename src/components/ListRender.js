import { useState } from "react"


const ListRender = () => {
    const [list] = useState(["ivan","kamila", "fabiana","geni"])

    const [users] = useState([
        {id : 1334 , name: "Ivan", age: "23"},
        {id : 1432 , name: "Kamila", age: "23"},
        {id : 132232 , name: "Fabiana", age: "38"},
    ]);

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
            {users.map((user) =>(
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        <ul>

        </ul>
    </div>
  )
}

export default ListRender