const registerUser = (req, res) => {
  console.log(req.body);
  res.json(req.body);
};

export { registerUser };
