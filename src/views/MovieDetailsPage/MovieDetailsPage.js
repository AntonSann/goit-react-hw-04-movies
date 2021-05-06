import React, {Component, Suspense, lazy} from 'react';
import { NavLink, Route, Switch, withRouter } from 'react-router-dom';
import MovieDBApi from '../../services/MovieDBApi';
import routes from '../../routes';
const Cast = lazy(() => import('../../components/Cast/Cast'));
const Reviews = lazy(() => import('../../components/Reviews/Reviews'));

class MovieDetailsPage extends Component {
    state = {
        title: '',
        genres: [],
        overview: null,
        id: null,
        release_date: null,
        vote_average: null,
        poster_path: '',
        error: false
}

async componentDidMount() {
    const { movieId } = this.props.match.params;
    
    MovieDBApi
    .getMovieDetails(movieId)
    .then( movie => this.setState({...movie}))
    .catch(error => {
      this.setState({ error: true });
    });      
}

handleButtonBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.movies);
  };
    
    render () {
        const { title, genres, overview, release_date, vote_average, poster_path } = this.state;
        const { match, location } = this.props;
        return(
        
            <>
            <button type="button" onClick={this.handleButtonBack}>Back</button>
            <div>
      <img
        src={
          poster_path &&
          `https://image.tmdb.org/t/p/w500/${poster_path}`
        }
        alt={`${title} poster`}
      />
      <div>
        <h1>{title}</h1>
        <p> Release date: {release_date}</p>
        <p>
          User Score:
          <span> {vote_average * 10} %</span>
        </p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genres.map(genre => (
          <span key={genre.id}>{genre.name} </span>))}</p>
      </div>
    </div>

  <ul>
  <li><NavLink to={{
                pathname: `${match.url}/cast`,
                state: location.state,
              }}>Cast</NavLink></li>
  <li><NavLink to={{
                pathname: `${match.url}/reviews`,
                state: location.state,
              }}>Reviews</NavLink></li>
  </ul>
  <Suspense fallback={<div>Loading... </div>}>
    <Switch>
  <Route path="/movies/:movieId/cast" component={Cast}/>
  <Route path="/movies/:movieId/reviews" component={Reviews}/>
  </Switch>
  </Suspense>
          </>

        )
    }
}


export default withRouter(MovieDetailsPage);