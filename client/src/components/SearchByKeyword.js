import React, { Component, Fragment } from 'react';
import FilteredAdvertList from './FilteredAdvertList';

class SearchByKeyword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""

        }
        this.updateSearch = this.updateSearch.bind(this);
    }

    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) });
    }

    render() {
        let filteredAdverts = this.props.adverts.filter(
            (advert) => {
                return advert.description.toLowerCase().indexOf(
                    this.state.search.toLowerCase()) !== -1;
            }
        );

        return (
            <Fragment>        
                    <div id="keyword-search">
                        <input placeholder="search for keyword(s)" type="text" value={this.state.search}
                            onChange={this.updateSearch} />
                    </div>
                    <div>
                      <button onClick={this.props.handleReturnToOptions}>
                          Return to Options
                      </button>
                    </div>
                    
                    <FilteredAdvertList adverts={filteredAdverts} />
            </Fragment>
        )
    }
}

export default SearchByKeyword;