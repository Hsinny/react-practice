import React, { Component } from 'react';
import data from './data/files.json';
import FileNode from './FileNode';

class FileTree extends Component {
    render() {
        return (
            <div>
                <FileNode name={data.name} files={data.files} />
            </div>
        );
    }
}

export default FileTree;