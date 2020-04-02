import React, { Component } from 'react';
import logo from './img/logo192.png';
import './style.css';

class ImgToggle extends Component {

    state = {
        visible: true,
    }

    toggle = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        const imgStyle = {
            display: this.state.visible ? 'block' : 'none'
        }

        const imgClass = `image ${this.state.visible ? null : 'hide'}` ;

        return (
            <div>
                <div>
                    <button onClick={this.toggle}>Toggle</button>
                </div>
                <div>1.img</div>
                { this.state.visible ? <img src={logo} alt="1"/> : null}
                <div>2.img</div>
                { this.state.visible && <img src={logo} alt="2"/>}
                <div>3.img</div>
                <img style={imgStyle} src={logo} alt="3" />
                <div>4.img</div>
                <img className={imgClass} src={logo} alt="4" />
            </div>
        );
    }
}

export default ImgToggle;