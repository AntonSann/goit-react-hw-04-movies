import React from 'react';
import {Link} from 'react-router-dom';

const MoviesList = ({movies, location}) =>{
    
    return(<div>
<ul>{movies.map(movie => (<li key={movie.id}>
    <Link to={{
                      pathname: `/movies/${movie.id}`,
                      state: { from: location },
                    }}>{movie.name}{movie.title}</Link>
    </li>))}</ul>
</div>)
}

export default MoviesList;