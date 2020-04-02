import React, { Component, PureComponent } from 'react';
import './style.css';

// Class Component，state、props 的值不管有沒有改變，都會重新 render
// class ProgressBar extends Component {
//     render() {
//         return (
//             <div className='progressBar'>
//                 <div className="progressBar-inner" style={ {width: `${this.props.value}%`} }>
//                 </div>
//                 <span>{this.props.value}%</span>
//             </div>
//         );
//     }
// }

// Pure Component，state、props 的值沒有改變便不會重新 render，效能上較佳
class ProgressBar extends PureComponent {
    render() {
        return (
            <div className='progressBar'>
                <div className="progressBar-inner" style={ {width: `${this.props.value}%`} }>
                </div>
                <span>{this.props.value}%</span>
            </div>
        );
    }
}


// Function Component / StateLess Function Component，state、props 的值不管有沒有改變，都會重新 render
// 沒有 state、render()、自訂 methed
// const ProgressBar = (props) => {
//     return (
//         <div className='progressBar'>
//             <div className="progressBar-inner" style={ {width: `${props.value}%`} }>
//             </div>
//             <span>{props.value}%</span>
//         </div>
//     );
// }



export default ProgressBar;