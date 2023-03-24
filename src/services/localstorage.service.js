class LocalStorage {
  writeItems(items) {
    localStorage.setItem('items', JSON.stringify(items))
  }

  readItems() {
    const items = localStorage.getItem('items')
    if (items === undefined || items === null) {
      return []
    }
    return JSON.parse(items)
  }
}

const LOCALSTORAGE_INSTANCE = new LocalStorage()

export { LOCALSTORAGE_INSTANCE } // named export
