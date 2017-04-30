const request    = require('request-promise');
const connection = require('./connection');
const query      = require('./query');

const RECOMMEND_URL = require('../config').RECOMMEND_SYSTEM_URL;

// Movies: movid, movname, movyear, genre, director,
// description, movTrailerUrl, movScreenshotUrl, CreatAt, UpdateAt

class Movie {
    constructor() {
        this.conn = connection;
    }

    findMovie(json) {
        return query(()=>{
            return this.conn.query('SELECT * FROM Movies '
                + 'WHERE movid=:movid', {replacements: json});
        });

    }

    addMovie(json) {
        return query(()=>{
            return this.conn.query('INSERT INTO Movies '
                + '(movid, movname, movyear, genre, director, description, movTrailerUrl, movScreenshotUrl) '
                + 'VALUES (:movid, :movname, :movyear, :genre, :director, :description, :movTrailerUrl, :movScreenshotUrl)',
                {replacements: json});
        });

    }

    deleteMovie(json) {
        return query(()=> {
            return this.conn.query('DELETE FROM Movies WHERE movid=:movid',
            {replacements: json});
        });

    }

    updateMovie(json) {
        return query(()=> {
            return this.conn.query('UPDATE Movies\
                SET ' + (json.movname          != undefined ? 'movname=:movname,' : '')
                      + (json.movyear          != undefined ? 'movyear=:movyear,' : '')
                      + (json.genre            != undefined ? 'genre=:genre,' : '')
                      + (json.director         != undefined ? 'director=:director,' : '')
                      + (json.description      != undefined ? 'description=:description,' : '')
                      + (json.movTrailerUrl    != undefined ? 'movTrailerUrl=:movTrailerUrl,' : '')
                      + (json.movScreenshotUrl != undefined ? 'movScreenshotUrl=:movScreenshotUrl,' : '')
                      + (json.movid            != undefined ? 'movid=:movid': '') // this line make sure comma does not break SQL
                      + ' WHERE movid=:movid', {replacements: json}
                );
        });

    }

    getMovieGenres() {
        return query(()=> {
            return this.conn.query('SELECT * FROM Genres');
        });
    }

    getMoviesByGenre(json) {
        return query(()=> {
            return this.conn.query('SELECT * FROM Movies '
                + 'WHERE genre=:genre and movid>:movid ORDER BY movid LIMIT :count',
                {replacements: json});
        });
    }

    getNewestMovies(json) {
        return query(()=>{
            return this.conn.query('SELECT * FROM Movies '
                + 'ORDER BY movyear DESC LIMIT :count',
                {replacements: json});
        });

    }

    getRecommendMovies(json) {
        return request.get({
            url: RECOMMEND_URL,
            qs: json});
    }
}

const movies = new Movie();

module.exports = movies;