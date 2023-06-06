const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const movieControllers = require("./controllers/movieControllers");

router.get("/api/items", itemControllers.browse);
router.get("/api/items/:id", itemControllers.read);
router.put("/api/items/:id", itemControllers.edit);
router.post("/api/items", itemControllers.add);
router.delete("/api/items/:id", itemControllers.destroy);

router.get("/api/movies", movieControllers.getMovies);
router.get("/api/movies/:id", movieControllers.getMovieById);
router.post("/api/movies", movieControllers.postMovie);
router.put("/api/movies/:id", movieControllers.updateMovie);
router.delete("/api/movies/:id", movieControllers.deleteMovie);

module.exports = router;
