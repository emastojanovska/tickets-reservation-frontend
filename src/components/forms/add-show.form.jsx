import React from 'react';

export class AddShowForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            startDate: '',
            endDate: '',
            amount: '',
            currency: '',
            cinemaHall: {},
            movie: {}
        }
    }

    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const { startDate, endDate, amount, currency, movie, cinemaHall } = this.state;
        this.props.onAddShow(startDate, endDate,  amount, currency, cinemaHall, movie)


        this.setState({startDate:'', endDate:'', amount:'', currency: '', cinemaHall:{}, movie:{}});
    }

    render(){
        return(
            <div>
                <h1>Add new show</h1>
                {this.state.movie.name}
                <div className="row">
                    <div className="col-3">

                    </div>
                    <div className="col-6">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="startDate">Start Date</label>
                                <input type="datetime-local" className="form-control" id="startDate" onChange={this.handleChange}
                                       aria-describedby="startDate" placeholder="Enter start date" name="startDate"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="endDate">End Date</label>
                                <input type="datetime-local" className="form-control" id="endDate" onChange={this.handleChange}
                                       aria-describedby="endDate" placeholder="Enter end date" name="endDate"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="amount">Amount</label>
                                <input type="text" className="form-control" id="amount" onChange={this.handleChange}
                                       aria-describedby="amount" placeholder="Enter amount" name="amount"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="currency">Currency</label>
                                <select name="currency" id="currency" className="form-control" onChange={this.handleChange}>
                                    <option value="MKD">MKD</option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cinemaHall">Cinema Hall</label>
                                <select name="cinemaHall" id="cinemaHall" className="form-control" onChange={this.handleChange}>
                                    {this.props.cinemaHalls
                                        .map(cinemaHall => (<option value={cinemaHall}>{cinemaHall.cinemaHallNumber}</option>))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="movie">Movie</label>
                                <select name="movie" id="movie" className="form-control" onChange={this.handleChange}>
                                    {this.props.movies
                                        .map(movie => (<option value={movie}>{movie.name}</option>))}
                                </select>
                            </div>


                            <button type="submit" className="btn btn-dark">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

};

export default AddShowForm;