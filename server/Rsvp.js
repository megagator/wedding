const db = require('./db')

class Rsvp {
  static createTable () {
    const sql = `
      CREATE TABLE IF NOT EXISTS rsvp (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        attending INTEGER,
        guests INTEGER,
        song TEXT,
        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
        ip TEXT,
        user_agent TEXT
      )`
    return db.run(sql)
  }

  static deleteTable () {
    db.run('DROP TABLE IF EXISTS rsvp')
  }

  static async add ({ name, attending, guests, song, ip, userAgent }) {
    if (!song) song = null

    const sql = `
      INSERT INTO rsvp (name, attending, guests, song, ip, user_agent) VALUES (?,?,?,?,?,?)
    `
    const result = await db.run(sql, [name, attending, guests, song, ip, userAgent])
    return result.id
  }

  // static async remove (id) {
  //   const sql = `
  //     DELETE FROM rsvp WHERE id = ?
  //   `
  //   const result = await db.run(sql, [id])
  //   return result.affected
  // }

  static async getAll () {
    const sql = `
      SELECT * FROM rsvp ORDER BY created ASC
    `
    const result = await db.all(sql)
    return result
  }

  static finish () {
    this.db.close()
  }
}

module.exports = Rsvp
