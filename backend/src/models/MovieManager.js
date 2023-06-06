const AbstractManager = require("./AbstractManager");

class MovieManager extends AbstractManager {
  constructor() {
    super({ table: "movie" });
  }

  insert({ title, director, year, color, duration }) {
    return this.database.query(
      `insert into ${this.table} (title, director, year, color, duration) values (?, ?, ?, ?, ?)`,
      [title, director, year, color, duration]
    );
  }

  update(movie) {
    return this.database.query(`update ${this.table} set ? where id = ?`, [
      movie,
      movie.id,
    ]);
  }
}

module.exports = MovieManager;
