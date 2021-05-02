import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage/HomePage';
import MoviesPage from './views/MoviesPage/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
import routes from './routes';
import AppBar from './components/AppBar/AppBar'
import NotFoundView from './views/NotFoundView/NotFoundView';

/* apiKey = 605382a7dc8cdf1b27caa631f83d6230 */
const App = () => (
<>
<AppBar/>
<Switch>
  <Route exact path={routes.home} component={HomePage}/>
  <Route path={routes.movieDetails} component={MovieDetailsPage}/>
  <Route path={routes.movies} component={MoviesPage}/>
  <Route component={NotFoundView}/>
</Switch>
</>);

export default App;
