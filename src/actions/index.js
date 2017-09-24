export function setSearch(search){
  return {
    type: 'SEARCH',
    payload: search
  }
}

export function setImages(images){
  return {
    type: 'IMAGES',
    payload: images
  }
}