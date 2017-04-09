const connection  = require('./connection');
const query       = require('./query');
class Customer {
    constructor() {
        this.conn = connection;
    }

    findUser(json) {
        return query(()=>{
            return this.conn.query('SELECT * FROM Customers'
                + ' WHERE cusname = :cusname LIMIT 1;', { replacements: json });
        });

    }

    addUser(json) {
        return query(()=> {
            return this.conn.query('INSERT INTO Customers '
                + '(cusname, cusemail, cuspassword,cusPortraitUrl) '
                + 'VALUES (:cusname, :cusemail, :cuspassword, :cusPortraitUrl)',
                { replacements:  json });
        });
    }

    deleteUser(json) {
        return query(()=> {
            return this.conn.query('DELETE FROM Customers WHERE cusname=:cusname',
                { replacements: json });
        });
    }

    updateUserPassword(json) {
        return query(()=> {
            return this.conn.query('UPDATE Customers '
                + 'SET cuspassword= :cuspassword'
                + 'WHERE cusname = :cusname', 
                { replacements: json });
        });
    }

    updateUserPortraitUrl(json) {
        return query(()=> {
            return this.conn.query('UPDATE Customers '
                + 'SET cusPortraitUrl= :cusPortraitUrl '
                + 'WHERE cusname = :cusname',
                { replacements: json });
        });

    }
}

const customer = new Customer();

module.exports = customer;