import React from 'react';
import './reservation.styles.css'
import jsPDF from 'jspdf';

export class Reservation extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            show : this.props.shows.filter(show => show.id.id === this.props.id),
        }
    }
     pdfGenerate = () =>{
        var doc = new jsPDF('landscape', 'px', 'a4', 'false');
        const {customerName, telephone, shows, id} = this.props;
        doc.text('RESERVATION', 100, 100)
        doc.text(`Reservation made at: ${Date.now()}` , 100, 130);
        doc.text(`Customer name: ${customerName}`, 100, 160);
        doc.text(`Contact: ${telephone}`, 100, 190);
         {shows
             .filter(show => show.id.id === id).map(show => (
                 doc.text(
                 `Reservation made for the movie ${show.movieTitle} for ${show.startDateTime.substring(0,10)} starting at ${show.startDateTime.substring(11)}.
             The total price for the tickets is ${ parseInt(show.price.amount) * parseInt(this.props.numbertickets) + (2 *  parseInt(show.price.amount)) * parseInt(this.props.numberLoveTickets) * 0.95} ${show.price.currency}.`
                 , 100, 220)))}
         doc.save('reservation.pdf');

    }
    render(){
    return(
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <h2>  {this.props.shows
                        .filter(show => show.id.id === this.props.id).map(show => (<h2> You made a successful reservation for the movie:<br/>
                            <b>{show.movieTitle}</b> <br/> for the date <b>{show.startDateTime.substring(0,10)}</b> starting at <b>{show.startDateTime.substring(11)}</b>. <br/> Your total cost for the tickets is&nbsp;
                          <b>{ parseInt(show.price.amount) * parseInt(this.props.numbertickets) + (2 *  parseInt(show.price.amount)) * parseInt(this.props.numberLoveTickets) * 0.95} {show.price.currency}</b>.
                        </h2>))} </h2>
                    <h2>Name: <b>{this.props.customerName}</b></h2>
                    <h2>Contact: <b>{this.props.telephone}</b></h2>
                    <button className="button-dark-inverted" onClick={this.pdfGenerate}>DOWNLOAD</button>
                </div>

                <div className="col-2"></div>

            </div>
    )}
}


export default Reservation;
