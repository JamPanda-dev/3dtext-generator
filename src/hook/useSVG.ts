

export const alphabet_check = (data: any) => {
  if (data.match(/[^a-z]/gi)) {
    return false
  }
  return true
}
