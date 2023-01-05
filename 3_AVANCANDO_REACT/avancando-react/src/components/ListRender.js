import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Wendel", "Venes", "Marcy"])

    const [users, setUsers] = useState([
        {id:1, nome:"Wendel", idade:28},
        {id:2, nome:"Venes", idade:29},
        {id:3, nome:"Marcy", idade:9}
    ])

    const removeUser = () => {

        const radomNumber = Math.floor(Math.random()*4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => radomNumber !== user.id);
        });
    };

  return (
    <div>
        <h1>ListRender</h1>
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}    
        </ul>
        <div>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.nome} - {user.idade}</li>
                    ))}
                </ul>
        </div>    
        <div>
            <button onClick={removeUser}>Remover User</button>
        </div>
    </div>
  )
}

export default ListRender