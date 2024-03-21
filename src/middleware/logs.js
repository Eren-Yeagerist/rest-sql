const logRequest = (req, res, next) => {
  console.log("Request di PATH: ", req.path);
  next();
};

module.exports = logRequest;
