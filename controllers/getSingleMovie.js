const mongoose = require("mongoose");

const getSingleMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  const moviesData = await moviesModel.findOne({
    _id: req.params.movie_id,
  });

  res.status(200).json({
    status: "success",
    data: moviesData,
  });
};

module.exports = getSingleMovie;
