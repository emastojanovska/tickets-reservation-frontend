import React from 'react';
import {Redirect} from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Reservation from "../reservation/reservation";

export class MakeReservation extends React.Component{
    notify = () => toast.dark('You made a reservation successfully!');

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            customerName:'',
            telephone:'',
            ticketsNumber: '',
            loveTicketsNumber: '',
            visible: false
        }
    }
    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const { id, customerName, telephone, ticketsNumber, loveTicketsNumber } = this.state;
        try{
            await this.props.onMakeReservation(id, customerName, telephone, ticketsNumber, loveTicketsNumber )
            this.notify();
            this.setState({id: this.props.match.params.id ,
                visible: true});
            await this.props.allReservations(id);

        }catch(error)
        {
            console.error(error);
        }

    }

    render(){
        return(
            <div>
                <ToastContainer />
                {this.state.visible ? <Reservation
                    customerName={this.state.customerName}
                    telephone={this.state.telephone}
                    numbertickets={this.state.ticketsNumber}
                    numberLoveTickets={this.state.loveTicketsNumber}
                    shows={this.props.shows} id={this.state.id}
                    /> :
                <div>
                    <h1>Make a Reservation for
                        {this.props.shows.filter(show => show.id.id === this.props.match.params.id)
                            .map(show => (<h1><b>{show.movieTitle}</b></h1>))}</h1>
                    <div className="row">
                        <div className="col-3">

                        </div>
                        <div className="col-6">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="customerName">Name</label>
                                    <input type="text" className="form-control" id="customerName"
                                           onChange={this.handleChange}
                                           aria-describedby="customerName"
                                           placeholder="Enter name" name="customerName" required={true}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="telephone">Contact</label>
                                    <input type="text" className="form-control" id="telephone" onChange={this.handleChange}
                                           aria-describedby="telephone" placeholder="Enter telephone" name="telephone" required={true}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="ticketsNumber">Number of Regular Tickets</label>
                                    <input type="number" className="form-control" id="ticketsNumber" onChange={this.handleChange}
                                           aria-describedby="ticketsNumber" placeholder="Enter number for regular tickets" required={true} name="ticketsNumber"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="loveTicketsNumber">Number of Love Tickets</label>
                                    <input type="number" className="form-control" id="loveTicketsNumber" onChange={this.handleChange}
                                           aria-describedby="loveTicketsNumber" required={true} placeholder="Enter number for love tickets" name="loveTicketsNumber"/>
                                </div>


                                <button type="submit" className="btn btn-dark" >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>}

            </div>
        )
    }

};

export default MakeReservation;