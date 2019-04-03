'use strict'

import React from 'react';
import SidebarItem from './SidebarItem';

export default class Sidebar extends React.Component {
  handleClick(index, ev) {
  }
  render() {
    const { files, selectedFileIndex, onAdd } = this.props;

    return (
      <ul className="sidebar">
        {this.props.files.map(function(file){
          return <SidebarItem file={this.props.file} />
        })}
      </ul>
    );
  }
}
