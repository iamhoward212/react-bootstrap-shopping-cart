import  React, { Component } from 'react';

import  SearchBtn from './SearchBtn'

class SearchBar extends Component {

  constructor(props){
    super(props)
    this.state = {
      searchTerm : ''
    };
    this.searchTermA = React.createRef();
  }

  handleSearch = (e) => { //傳回父組件，通知搜尋字串更改
    this.setState(
      { searchTerm: this.searchTermA.value},
      () => {
        this.props.handleSearch(this.state.searchTerm);
      }
    )
  }

  render() {
    return (
      <div className="search">
        <input 
          ref={this.searchTermA}
          type="search" 
          placeholder="Serach for Food"
          className="search-keyword"
          onChange={this.handleSearch}
        ></input>
        <SearchBtn className="search-button" onClick={this.props.handleSearch}></SearchBtn>
      </div>
    )
  }
}

export default SearchBar;