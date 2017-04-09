const connection = require('./connection');
const query      = require('./query');
// Rating: movid, cusid, rating, timestamp

class Rating {
    constructor() {
        this.conn = connection;
    }

    addRating(json) {
        return query(()=> {
            return this.conn.query('INSERT INTO Ratings '
                + '(movid, cusid, rating) '
                + 'VALUES (:movid, :cusid, :rating)',
                {replacements: json});
        });

    }

    deleteRating(json) {
        return query(()=> {
            return this.conn.query('DELETE FROM Ratings WHERE movid=:movid and cusid=:cusid',
                {replacements: json});
        });
    }

    updateRating(json) {
        return query(()=> {
            return this.conn.query('UPDATE Ratings '
                + 'SET rating=:rating WHERE movid=:movid and cusid=:cusid',
                {replacements: json});
        });

    }

    groupRatingByMovie(json) {
        return query(()=> {
            return this.conn.query('SELECT rating, COUNT(rating) as count FROM Ratings '
                + 'WHERE movid=:movid GROUP BY rating DESC',
                {replacements: json});
        });
    }
}

const rating = new Rating();

module.exports = rating;