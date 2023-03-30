import React, { Component } from 'react'





//refactor with class component

// export default class Social extends Component {
//     render() {
//         return (
//             <li>
//                 <a href="#0">
//                     <img src={this.props.img}  alt={this.props.img}/>
//                 </a>
//             </li>
//         )
//     }
// }


//refactor with functional component

export default function Social(props) {
    return (
        <li>
            <a href={props.href}>
                <img src={props.img} alt={props.img} />
            </a>
        </li>
    )
}



