const jwt = require("jsonwebtoken");
const Auth = (req, res, next) => {
  console.log("Auth reached");
  let token = req.headers.authorization;
  console.log(token);
  if (token) {
    jwt.verify(token, "key", function (err, decoded) {
      if (decoded) {
        console.log(decoded.authorId);
        req.body["authorId"] = decoded.authorId;
        next();
      } else res.send("not logged - middleware error");
    });
  } else {
    res.send("not token found");
  }
};
module.exports = { Auth };
