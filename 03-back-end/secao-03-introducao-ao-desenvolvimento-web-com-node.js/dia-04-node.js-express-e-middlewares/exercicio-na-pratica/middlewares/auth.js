module.exports = (req, res) => {
  const { authorization } = req.headers;

  if (!authorization || authorization.length !== 16) {
    return res.status(401).json({ message: 'Token inválido!' });
  }
};