/**
 * @file index
 * @author pashangshangpo
 * @date 2018-06-30 08:22:06
 */

const Storage = require('json-storage')

const getDateTime = () => {
  let date = new Date()
  let day = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())

  return day.getTime()
}

class StorageDate extends Storage {
  constructor(root) {
    super(root)
  }

  set(data) {
    return super.set(getDateTime(), data)
  }

  get(key = getDateTime()) {
    return super.get(key)
  }
}

module.exports = StorageDate