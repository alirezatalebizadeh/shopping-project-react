import React, { Component } from 'react'






//refactor with class component

// export default class CartProduct extends Component {
//     sendId(cartId) {
//         this.props.onRecieveId(cartId)
//     }

//     render() {
//         let { id, title, price, img } = this.props
//         return (
//             <div className="cart-row">
//                 <div className="cart-item cart-column">
//                     <img className="cart-item-image" src={img} width="100" height="100" />
//                     <span className="cart-item-title">{title}</span>
//                 </div>
//                 <span className="cart-price cart-column">$ {price}</span>
//                 <div className="cart-quantity cart-column">

//                     <button onClick={this.sendId.bind(this, id)} className="btn btn-danger" type="button">Remove</button>
//                 </div>
//             </div>
//         )
//     }
// }


//refactor with functional component

export default function CartProduct(props) {

    const sendId = (cartId) => {
        props.onRecieveId(cartId)
    }

    return (
        <div className="cart-row">
            <div className="cart-item cart-column">
                <img className="cart-item-image" src={props.img} width="100" height="100" />
                <span className="cart-item-title">{props.title}</span>
            </div>
            <span className="cart-price cart-column">$ {props.price}</span>
            <div className="cart-quantity cart-column">
                <button onClick={() => sendId(props.id)} className="btn btn-danger" type="button">Remove</button>
            </div>
        </div>
    )
}
