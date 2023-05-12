import React, { Component } from 'react';
class Hello extends React.Component{
  state = {
    selectedFile : null
  }
  fileSelect = event => {
    this.setState({selectedFile: event.target.files[0]})
    console.log(event.target.files[0])
  }
  fileUpload = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('http://localhost/proje/addR.php', fd
    ).then(res=>
    {
    console.log(res);
    }
    );
    
  }
  render() {
    return (
  <div>
    <input type="file" onChange = {this.fileSelect} />
  <button onClick = {this.fileUpload}>Upload</button>
  </div>
    );
  }
  }