import React, {Component } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
import MovieDBApi from '../../services/MovieDBApi';

class HomePage extends Component{
    state = {
        movies:[]
    }

componentDidMount(){
    MovieDBApi
    .getTrending()
    .then( movies => this.setState({movies: movies}))
    .catch(error => console.log(error))      
}
    render (){
        return (
            <>
            <h2>HomePage</h2>
            <MoviesList movies={this.state.movies}/>
            </>
        )
    }
}

export default HomePage;