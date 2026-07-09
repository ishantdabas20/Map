import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
console.log(id,"tyui");

  return <h2>User ID:{id} </h2>;
}

export default User;