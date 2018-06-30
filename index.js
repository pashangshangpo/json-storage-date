/**
 * @file index
 * @author pashangshangpo
 * @date 2018-06-30 08:22:06
 */

const Storage = require('json-storage')

const getDateTime = () => {
  let date = new Date()
  let today = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())

  return today.getTime()
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

  remove(key = getDateTime()) {
    return super.remove(key)
  }

  getWeekKeys() {
    let date = new Date()
    let day = date.getDay()

    if (day === 0) {
      day = 7
    }

    let dayTime = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate() - day).getTime()
    let week = new Date(dayTime)

    week.setDate(week.getDate() + 7)

    let weekTime = week.getTime()

    return super.findKeys(function(key) {
      let date = parseFloat(key)

      return date >= dayTime && date <= weekTime
    })
  }
}

module.exports = StorageDate