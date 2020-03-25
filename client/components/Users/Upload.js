import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

class UploadFile extends React.Component {
  constructor(props) {
    const user = props.user
    console.log('Heres the user', user)
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
        <br />
        <div>
          <button>Upload </button>
        </div>
      </form>
    )
  }
}

export default UploadFile
