export default function(state = null, action) {
  switch (action.type){
    case 'SEARCH':
      return action.payload
  }
  return state
}