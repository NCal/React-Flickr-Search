export default function(state = [], action) {
  switch (action.type){
    case 'IMAGES':
      return action.payload
  }
  return state
}