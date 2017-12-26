export default (filter, list, key) => {
  if (key === '*') {
    return list.filter(item => Object.keys(item).map((key) => item[key].toString().toLowerCase().includes(filter.toLowerCase())).includes(true))
  }

  return list.filter(item => item[key].toString().toLowerCase().includes(filter.toLowerCase()))
}
