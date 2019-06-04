const sqlite3 = require('sqlite3')
const dbLocation = './rsvp.db'

class LocalDb {
  constructor () {
    const pathName = dbLocation
    this.db = new sqlite3.Database(pathName, (error) => {
      if (error) {
        console.error('Could not connect to database', error)
      } else {
        console.log('Connected to database')
      }
    })
  }

  run (sql, params = []) {
    return new Promise((resolve) => {
      this.db.run(sql, params, function (error) {
        if (error) {
          throw new Error('Error running sql: ' + sql + '\n' + error)
        } else {
          resolve({
            id: this.lastID,
            affected: this.changes
          })
        }
      })
    })
  }

  get (sql, params = []) {
    return new Promise((resolve) => {
      this.db.get(sql, params, function (error, result) {
        if (error) {
          throw new Error('Error getting sql: ' + sql + '\n' + error)
        } else {
          // returns undefined if empty result
          // else object of column names and values
          resolve(result)
        }
      })
    })
  }

  all (sql, params = []) {
    return new Promise((resolve) => {
      this.db.all(sql, params, function (error, result) {
        if (error) {
          throw new Error('Error getting all sql: ' + sql + '\n' + error)
        } else {
          // returns empty array if empty result
          // else array of objects of column names and values
          resolve(result)
        }
      })
    })
  }

  close () {
    this.db.close()
  }
}

module.exports = new LocalDb()
