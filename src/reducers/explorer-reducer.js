const initialState = {
  isBusy: false,
  results: [],
  error: null
}

export default function explorerReducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DATA_PENDING':
      return { ...state, isBusy: true }
    case 'FETCH_DATA_SUCCESS':
      return { ...state, results: state.results.concat(action.payload), isBusy: false }
    case 'FETCH_DATA_ERROR':
      return { ...state, error: action.payload, isBusy: false }
    case 'CLEAR_RESULTS':
      return { ...state, results: [] }
    default:
      return state
  }
}
