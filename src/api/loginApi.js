const loginApi = async (username, password) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/auth/login`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username,
        password,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Invalid username or password");
  }

  const token = await response.text();

  return token;
};

export default loginApi;