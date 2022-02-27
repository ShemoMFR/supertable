const datasMocked = require('../Db.json');

export default function handler(req, res) {

    res.status(200).json({ 
        datas: datasMocked
    });

}
