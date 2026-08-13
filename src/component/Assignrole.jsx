
import { useEffect, useState } from "react";
import axios from "axios";

const Assignrole = () => {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [userId, setUserId] = useState("");
    const [roleId, setRoleId] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetchUsers();
        fetchRoles();
    }, []);

    console.log("API URL:", process.env.REACT_APP_API_URL);
    
    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/getAllUsers`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const fetchRoles = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.get(`${process.env.REACT_APP_API_URL}/roles/getrole`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setRoles(response.data);
        } catch (error) {
            console.error("Error fetching roles:", error);
        }
    };

    const handleAssignrole = async (e) => {
        e.preventDefault();

        if (!userId || !roleId) {
            setMessage("Please select a user and a role.");
            return;
        }

        try {
            const token = localStorage.getItem("token");

            await axios.put(
                `${process.env.REACT_APP_API_URL}/user/assignrole`,
                {
                    userId: Number(userId),
                    roleId: Number(roleId)
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setMessage("Role assigned successfully.");

            fetchUsers();

        } catch (error) {
            console.error("Error assigning role:", error);
            setMessage("Failed to assign role.");
        }
    };

    return (
        <div>
            <h2>Assign Role</h2>

            <form onSubmit={handleAssignrole}>

                <div>
                    <label>Select User</label>

                    <select
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    >
                        <option value="">
                            -- Select User --
                        </option>

                        {users.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.username}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Select Role</label>

                    <select
                        value={roleId}
                        onChange={(e) => setRoleId(e.target.value)}
                    >
                        <option value="">
                            -- Select Role --
                        </option>

                        {roles.map((role) => (
                            <option key={role.id} value={role.id}>
                                {role.name}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit">
                    Assign Role
                </button>

            </form>

            {message && <p>{message}</p>}
        </div>
    );
};

export default Assignrole;
