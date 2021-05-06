import React, { Component } from 'react';
import MovieDBApi from '../../services/MovieDBApi';

class Reviews extends Component {
    state = {
        reviews: [],
        error: false
    }

    componentDidMount(){
        const { movieId } = this.props.match.params;
        MovieDBApi
        .getMovieReviews(movieId)
        .then( reviews => this.setState({reviews: reviews}))
        .catch(error => {
          this.setState({ error: true });
        });      
    }

    render() {
      const {reviews} = this.state;
      if (reviews.length > 0){
        return (<>
            <h2>Reviews</h2>
            <ul>
            {this.state.reviews.map(review => (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
            </>
        )} else { return(
        <p>We don't have any reviews for this movie</p>)
        }        
    }

}

export default Reviews;