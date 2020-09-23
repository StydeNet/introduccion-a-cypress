const signup = async (data) => {
  try {
    const response = await fetch("/signup", {
      method: "POST",
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    return error;
  }
};

export default signup;
