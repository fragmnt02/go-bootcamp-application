const { Cake } = require('../../utils/models/Cake');

exports.getAllCakes = async (_, res) => {
    Cake.find({}, (err, cakes) => {
        if (err) {
            res.status(400).json(err);
        }
        res.status(200).json(cakes);
    }).exec();
}

exports.getACake = async (req, res) => {
    let { id } = req.params;
    Cake.findById(id, (err, cake) => {
        callback(err, cake, res);
    }).exec();
};

exports.createACake = async (req, res) => {
    Cake.create(req.body).then((cake) => {
        res.status(201).json(cake.toJSON());
    }).catch(err => {
        res.status(400).json(err);
    });
};

exports.updateACake = async (req, res) => {
    const { id } = req.params;
    Cake.findByIdAndUpdate(id, req.body, { new: true }, (err, cake) => {
        callback(err, cake, res);
    }).exec();
};

exports.deleteACake = async (req, res) => {
    const { id } = req.params;
    Cake.findByIdAndDelete(id, { useFindAndModify: true }).exec().then(() => {
        res.status(200).send();
    }).catch((err) => {
        res.status(400).json(err);
    });
};

const callback = (err, cake, res) => {
    if (!cake) {
        return res.status(404).send();
    } else {
        if (err) {
            res.status(400).json(err);
        }
        res.status(200).json(cake.toJSON());
    }
}