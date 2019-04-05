import Explorer from '../components/explorer/Explorer'
import ExplorerSearch from '../components/search/ExplorerSearch'
import LoadMoreButton from '../components/loadMore/LoadMoreButton'
import React, { memo, useState, useEffect } from 'react'
import { fetchData, clearResults } from '../actions/explorer-actions'
import { connect } from 'react-redux'
import { debounce } from 'throttle-debounce'

function ExplorerContainer (props) {
  const [q, setQ] = useState('cats')
  const [limit] = useState(12)
  const [offset, setOffset] = useState(0)

  const triggerFn = (query) => {
    console.log('searchChanged', query)
    props.clearResults()

    setQ(q)
    setOffset(0)
  }

  const triggerNewSearch = debounce(500, triggerFn)

  useEffect(() => {
    props.fetchData({
      q: q,
      limit: limit,
      offset: offset
    })
  }, [q, limit, offset])

  const handleSearchChanged = (newSearch) => {
    // event.persist()
    console.log('search changed')
    triggerNewSearch(newSearch)
  }

  const handleLoadMoreClicked = (event) => {
    setOffset(offset + limit)

    console.log('loadMoreClicked', event)
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(ExplorerContainer))
