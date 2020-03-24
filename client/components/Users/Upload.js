import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

class UploadFile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fileUrl: ''
    }

    this.handleUpload = this.handleUpload.bind(this)
  }

  handleUpload(evt) {
    evt.preventDefault()

    const data = new FormData()
    data.append('file', this.uploadInput.files[0])
    data.append('filename', this.fileName.value)

    fetch('http://localhost:8080/upload', {
      method: 'POST',
      body: data
    }).then(response => {
      response.json().then(body => {
        this.setState({fileUrl: `http://localhost:8080/${body.file}`})
      })
    })
  }

  render() {
    return (
      <form onSubmit={this.handleUpload}>
        <div>
          <input
            ref={ref => {
              this.uploadInput = ref
            }}
            type="file"
          />
        </div>
        <div>
          <input
            ref={ref => {
              this.fileName = ref
            }}
            type="text"
            placeholder="Enter the desired name of file"
          />
        </div>
        <br />
        <div>
          <button>Upload</button>
        </div>
        <img src={this.state.fileUrl} alt="resume" />
      </form>
    )
  }
}

export default UploadFile
