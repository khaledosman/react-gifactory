import Explorer from '../components/explorer/Explorer'
import ExplorerSearch from '../components/search/ExplorerSearch'
import LoadMoreButton from '../components/loadMore/LoadMoreButton'
import React, { memo, useState, useEffect } from 'react'
import { fetchData, clearResults } from '../actions/explorer-actions'
import { connect } from 'react-redux'

let timeout
function ExplorerContainer (props) {
  const [q, setQ] = useState(props.q || 'javascript')
  const [limit] = useState(12)
  const [offset, setOffset] = useState(0)
  const { fetchData } = props

  useEffect(() => {
    fetchData({
      q,
      limit,
      offset
    })
  }, [q, limit, offset, fetchData])

  const handleSearchChanged = (newSearch) => {
    if (timeout) {
      window.clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      console.log('searchChanged', newSearch)
      props.clearResults()
      setQ(newSearch)
      setOffset(0)
    }, 1000)
  }

  const handleLoadMoreClicked = (event) => {
    setOffset(offset + limit)
  }

  return (
    <main>
      <ExplorerSearch onSearchChanged={handleSearchChanged} />
      <Explorer
        results={props.results}
        isBusy={props.isBusy}
        error={props.error}
      />
      <LoadMoreButton onClick={handleLoadMoreClicked} />
    </main>
  )
}

const mapStateToProps = (state) => {
  return {
    results: state.explorer.results,
    isBusy: state.explorer.isBusy,
    error: state.explorer.error
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData: (opts) => dispatch(fetchData(opts)),
  clearResults: () => dispatch(clearResults())
})
ExplorerContainer.whyDidYouRender = true

export default connect(mapStateToProps, mapDispatchToProps)(memo(ExplorerContainer))
