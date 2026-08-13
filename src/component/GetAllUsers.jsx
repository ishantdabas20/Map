import { useEffect,useState} from "react";

function GetAllUsers(){

    const[users, setUsers]= useState([]);

    useEffect(() => {

        const fetchUsers = async() =>{
            const token = localStorage.getItem("token");

            const response= await fetch(
                `${process.env.REACT_APP_API_URL}/user/getAllUsers`,
                {
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
            );

            const data = await response.json();
            setUsers(data); 
        };
        fetchUsers();
    },[]);

    return (
        <div className = "container">

        <h1>All Users</h1>

        <table>
        <thead>
        <tr>
        <th>Id</th>
        <th>UserName</th>
        <th>Role</th>
        </tr>
        </thead>

        <tbody>
        
        {users.map((user)=>(
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>
                    <span className="role">
                        {user.role}
                    </span>
                </td>
            </tr>
        ))}
        
        </tbody>
        </table>
        </div>
    )}

export default GetAllUsers;