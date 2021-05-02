import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesList from '../../components/MoviesList/MoviesList';
import MovieDBApi from '../../services/MovieDBApi';
import queryString from 'query-string';

class MoviesPage extends Component {

    state = {
        movies: [],
        currentPage: 1,
        searchQuery: '',
        isLoading: false,
        error: null,
        showModal: false,
        largeImage: '',
      }

      componentDidMount() {
        const { location } = this.props;
    
        const { query } = queryString.parse(location.search);
    
        query &&
        MovieDBApi.searchMovies(query).then(results => {
            this.setState({ movies: results });
          });
      }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.fetchMoviesList();
        }
    }

    fetchMoviesList = () => {
        //const { currentPage, searchQuery } = this.state;
        //const options = { searchQuery, currentPage };
    
        this.setState({ isLoading: true });
    
        MovieDBApi.searchMovies(this.state.searchQuery)
          .then(movies => {
            this.setState(prevState => ({
                movies: [...prevState.movies, ...movies],
              currentPage: prevState.currentPage + 1,
            }));
            
          })
          .catch(error => this.setState({ error }))
          .finally(() => this.setState({ isLoading: false }));
      };

    onChangeQuery = query => {
        this.setState({
          movies: [],
          searchQuery: query,      
          error: null,
        });
        this.props.history.push({
          pathname: this.props.history.pathname,
          search: `query=${query}`,
        });
      };

  render() {
    const { location } = this.props;
    return (
        <div>
        <h2>MoviesPage</h2>
        <SearchForm onSubmit={this.onChangeQuery}/>
        <MoviesList movies={this.state.movies} location={location}/>
        </div>
    );
  }
}

export default MoviesPage;