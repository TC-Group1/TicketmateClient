const getDateString = (timeStamp: string) => {
  const date = new Date(parseInt(timeStamp))
  return date.toLocaleDateString()
}

export default getDateString
