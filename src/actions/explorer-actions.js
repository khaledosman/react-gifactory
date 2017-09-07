import axios from 'axios'

export function fetchData ({q = 'cats', limit = 12, offset = 0}) {
  return function (dispatch) {
    dispatch(fetchDataPending())
    axios.get('https://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: '838496faca184b1a9686d0c54d5f463d',
        q: q,
        limit: limit,
        offset: offset
      }
    })
      .then(function (response) {
        console.log(response)
        dispatch(fetchDataSuccess(response.data.data))
      })
      .catch(function (error) {
        console.log(error)
        dispatch(fetchDataError(error.message))
      })
  }
}

function fetchDataPending () {
  return {
    type: 'FETCH_DATA_PENDING',
    payload: null
  }
}

export function clearResults () {
  return {
    type: 'CLEAR_RESULTS',
    payload: null
  }
}

export const fetchDataSuccess = (results) =>
  ({
    type: 'FETCH_DATA_SUCCESS',
    payload: results
  })

export const fetchDataError = (error) =>
  ({
    type: 'FETCH_DATA_ERROR',
    payload: error
  })
