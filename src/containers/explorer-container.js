import Explorer from '../components/explorer/Explorer'
import ExplorerSearch from '../components/search/ExplorerSearch'
import LoadMoreButton from '../components/loadMore/LoadMoreButton'
import React, {PureComponent} from 'react'
import {fetchData, clearResults} from '../actions/explorer-actions'
import {connect} from 'react-redux'
import {debounce} from 'throttle-debounce'

class ExplorerContainer extends PureComponent {
  constructor (props) {
    super(props)
    this.handleSearchChanged = this.handleSearchChanged.bind(this)
    this.triggerNewSearch = debounce(500, this.triggerNewSearch.bind(this))
    this.handleLoadMoreClicked = this.handleLoadMoreClicked.bind(this)
    this.state = {
      q: 'cats',
      limit: 12,
      offset: 0
    }
  }
  componentWillMount () {
    this.props.fetchData({
      q: this.state.q,
      limit: this.state.limit,
      offset: this.state.offset
    })
  }

  handleSearchChanged (event) {
    // event.persist()
    this.triggerNewSearch(event.target.value)
  }

  triggerNewSearch (query) {
    console.log('searchChanged', query)
    this.props.clearResults()
    this.setState(this.fetchNewQuery(query))
  }

  handleLoadMoreClicked (event) {
    this.setState(this.fetchNextSet())

    console.log('loadMoreClicked', event)
  }

  fetchNewQuery (query) {
    return (previousState, currentProps) => {
      const newState = {
        q: query,
        limit: 12,
        offset: 0
      }
      this.props.fetchData(newState)
      return {...previousState, ...newState}
    }
  }
  fetchNextSet () {
    return (previousState, currentProps) => {
      const limit = previousState.limit
      const offset = previousState.offset + previousState.limit
      this.props.fetchData({
        q: this.state.q,
        limit,
        offset
      })
      return {...previousState, limit, offset}
    }
  }

  render () {
    return (
      <main>
        <ExplorerSearch onSearchChanged={this.handleSearchChanged} />
        <Explorer
          results={this.props.results}
          isBusy={this.props.isBusy}
          error={this.props.error}
          />
        <LoadMoreButton onClick={this.handleLoadMoreClicked} />
      </main>
    )
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(ExplorerContainer)
