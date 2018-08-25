import React from 'react';
import 'bulma/css/bulma.css';
import '../App.css';

export default ({contact, handleClick}) => {
  const toggleShowCard = () => {
    //console.log("remove: " + contact.name);
    handleClick(contact);
  }
  
    return(

        <div className="card-contact">
          <img src={contact.picture} alt="Avatar" />
        
          <div className="container-contact">
            <div className="box-size-lg"><b>{contact.name}</b></div>
            <div className="box-size-sm"><p>{contact.popularity}</p></div>
          </div>

          <button className="button is-danger card-button" onClick={toggleShowCard}>
            Remove
          </button>
        </div>)
}


// class Card extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       contact: this.props.contact,
//       //showCard: this.props.showCard,
//       keyContact: this.props.keyContact
//     }
//     this.toggleShowCard = this.toggleShowCard.bind(this);
//     this.handleClick = this.props.handleClick.bind(this);
//   }

//   toggleShowCard(){
//     // this.setState(prevState => ({
//     //   showCard: !prevState.showCard
//     // }));
//     this.props.handleClick(this.state.contact);
//   }

//   render(){
//     const {contact} = this.state;
//     console.log("child:" + contact.name + ":" + contact.show);
//       // if (!contact.show) {
//       //   return null;
//       // }
//     return(

//         <div className="card-contact">
//           <img src={this.state.contact.picture} alt="Avatar"/>
        
//           <div className="container-contact">
//             <div className="box-size-lg"><b>{this.state.contact.name}</b></div>
//             <div className="box-size-sm"><p>{this.state.contact.popularity}</p></div>
//           </div>

//           <button className="button is-danger card-button" onClick={this.toggleShowCard}>
//             Remove
//           </button>
//         </div>)
//   }
// }

// export default Card;