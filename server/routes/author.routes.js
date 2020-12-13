const AuthorController = require("../controllers/author.controller");

module.exports = app => {
    app.get("/", AuthorController.findAllAuthors);
    app.get("/:id", AuthorController.finedOneAuthor);
    app.post("/new", AuthorController.createNewAuthor);
    app.put("/edit/:id", AuthorController.updateAuthor);
    app.delete("/delete/:id", AuthorController.deleteAuthor);
};