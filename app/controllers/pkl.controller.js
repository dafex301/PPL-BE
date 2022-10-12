const db = require('../models')
const PKL = db.pkl

exports.submitPKL = (req, res) => {
    const pkl = new PKL({
        status: req.body.status,
        nilai: req.body.nilai,
        semester: req.body.semester,
        status_konfirmasi: req.body.status_konfirmasi,
        // upload_pkl: req.file.path,
        mahasiswa: req.mahasiswaId
    })

    pkl.save((err, pkl) => {
        if(err){
            res.status(500).send({ message: err});
            return
        }
        res.send({message: 'PKL was uploaded successfully!'})
    })
}