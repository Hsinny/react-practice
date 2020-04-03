import React, { Component } from 'react';
import './style.css';

class FileNode extends Component {

    state = {
        open: false
    }

    openToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {

        const { name, files } = this.props;

        if (!files) {
            return <div>{name}</div>
        } else {
            return (
                <div>
                    <div onClick={this.openToggle} className={ `folder ${(this.state.open) ? 'open' : ''}` }>{name}</div>
                    {
                        !this.state.open ? null : (
                            <ul>
                                {files.map(file=><FileNode {...file}/>)}
                            </ul>
                        )
                    }
                </div>
            );
        }
    }
}

export default FileNode;