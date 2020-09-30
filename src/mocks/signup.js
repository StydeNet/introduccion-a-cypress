const signup = (req, res, ctx) =>
  res(
    ctx.delay(2000),
    ctx.status(200),
    ctx.json({
      message: "Registration sucessfully",
    })
  );

export default signup;
