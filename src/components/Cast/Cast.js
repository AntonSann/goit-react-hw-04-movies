import React, { Component } from 'react';
import MovieDBApi from '../../services/MovieDBApi';

class Cast extends Component {
    state = {
      cast: []
    }

    async componentDidMount(){
        const { movieId } = this.props.match.params;
        MovieDBApi
        .getMovieCredits(movieId)
        .then( cast => this.setState({cast: cast}))
        .catch(error => console.log(error));      
    }

    render() {

        return (
    <div>
            <h2>Cast</h2>
            <ul>
        {this.state.cast.map(actor => (
          <li key={actor.id}>
            <div>
              <img
                src={
                  actor.profile_path
                    ? `http://image.tmdb.org/t/p/w200/${actor.profile_path}`
                    : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWlcoCV_lRyVx6rgzVICKS6dyURCfhpIvs9g&usqp=CAU`
                }
                alt={`Actor: ${actor.name}`}
                width={200}
              />
            </div>
            <h3>{actor.name}</h3>
            <p>{actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
        )
    }

}


export default Cast;