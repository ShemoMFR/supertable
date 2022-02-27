const datasMocked = require('../Db.json');

export default function handler(req, res, err) {

    if (err) {
        res.status(500).json({
            message: 'Problème serveur'
        })
    }

    res.status(200).json({ 
        datas: datasMocked
    });

}
