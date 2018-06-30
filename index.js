/**
 * @file index
 * @author pashangshangpo
 * @date 2018-06-30 08:22:06
 */

const Storage = require('json-storage')

class StorageDate extends Storage {
  constructor(root) {
    super(root)
  }

  set(data) {
    let date = new Date()
    let day = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())

    super.set(day.getTime(), data)
  }
}

module.exports = StorageDate