const singleuserdataApi = async (token) => {
  console.log("singleuserdataApi CALLED");
  console.log("Token received:", token);

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/user/getuser`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  console.log("Response status:", response.status);

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  const data = await response.json();

  console.log("User data from backend:", data);

  return data;
};

export default singleuserdataApi;