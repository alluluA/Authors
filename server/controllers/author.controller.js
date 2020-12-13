const Author = require("../models/Author.model");

module.exports.findAllAuthors = (req, res) => {
    Author.find()
    .then(allAuthors => res.json({Authors: allAuthors}))
    .catch(err => res.json({ message: "Something went wrong", error: err}));
};

module.exports.finedOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
    .then(oneAuthor => res.json({ Author: oneAuthor }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewAuthor = (req, res) => {
    const { name } = req.body;
    Author.create({
        name
    })
    .then(newAuthor => res.json({ Author: newAuthor }))
    .catch(err => res.json({ message: "Something went wrong", error: err}));
};

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true })
    .then(updatedAuthor => res.json({ Author: updatedAuthor }))
    .catch(err => res.json({ message: "Something went wrong", error: err}));
};

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result}))
    .catch(err => res.json({ message: "Something went wrong", error: err}));
};