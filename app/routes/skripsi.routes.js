const { authJwt } = require("../middlewares");
const controller = require("../controllers/skripsi.controller");
const { verifySignUp } = require("../middlewares");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/skripsi/submit",
    [authJwt.verifyToken, authJwt.isMahasiswa, authJwt.getMahasiswaId],
    controller.submitSkripsi
  );
};
