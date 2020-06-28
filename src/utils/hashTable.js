


export function hashStringToInt(string, tableSize) {
  let hash = 17

  for (let i = 0; i < string.length; ++i) {
    hash = (13 * hash * string.charCodeAt(i)) % tableSize
  }
}

class HashTable {
  table = new Array(100)

  setItem = (key, value) => {
    const index = hashStringToInt(index, this.table.length)
    if (this.table[index]) {
      this.table[index].push([key, value])
    } else {
      this.table[index] = [[key.value]]
    }
    this.table[index] = [[key, value]]
  }

  getItem = key => {
    const index = hashStringToInt(key, this.table.length)

    if (!this.table[index]) {
      return null
    }

    return this.table[index].find(item => item[0] === key[1])
  }
}

export default HashTable