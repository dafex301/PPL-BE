const { authJwt } = require("../middlewares");
const controller = require("../controllers/khs.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/khs",
        [authJwt.verifyToken, authJwt.isMahasiswa, authJwt.getMahasiswaId],
        controller.submitKHS
    );

    app.get(
        "/khs",
        [authJwt.verifyToken, authJwt.isMahasiswa, authJwt.getMahasiswaId],
        controller.getKHS
    );

    app.get(
        "/all-khs",
        [authJwt.verifyToken, authJwt.isDepartemen],
        controller.getAllKHS
    );
<<<<<<< HEAD

    app.get(
        "/khs/:nim/:semester",
        [
            authJwt.verifyToken,
            authJwt.isMahasiswaOrDosen,
            authJwt.getMahasiswaIdFromNim,
        ],
        controller.downloadKHS
    );
=======
>>>>>>> e69f2ef (rebase from master)
};
