import React, { Component } from 'react';
import axios from 'axios';

class MovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            poster: '',
            comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitForm(e) {
        e.preventDefault();
        const url = 'https://post-a-form.herokuapp.com/api/movies/';
        axios.post(url, this.state)
            .then(res => res.data)
            .then(res => {
                alert(`Congratulations! Movie added with ID ${res.id} !`);
            })
            .catch(e => {
                console.error(e);
                alert(`We encountered an error : ${e.message}`);
            });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <div>
                        <input type="text"
                            label="Movie Title"
                            placeholder="What's your favourite movie?"
                            onChange={this.onChange}
                            name = "title"
                        />
                    </div>
                    <div>
                        <input type="text"
                            label="Movie Poster"
                            placeholder="Where can I found a poster for it?"
                            onChange={this.onChange}
                            name = "poster"
                        />
                    </div>
                    <div>
                        <textarea label="Why is it your favourite movie"
                            rows="5"
                            cols="33"
                            placeholder="Why do you like it?"
                            onChange={this.onChange}
                            name = "comment"
                            />
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default MovieForm