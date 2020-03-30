import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Button from '@material-ui/core/Button'

const Swal = require('sweetalert2')

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

    fetch('/upload', {
      method: 'POST',
      body: data
    }).then(response => {
      response.json().then(body => {
        this.setState({fileUrl: `/upload/${body.file}`})
      })
    })

    // const { value: file } = await Swal.fire({
    //   title: 'Select image',
    //   input: 'file',
    //   inputAttributes: {
    //     'accept': 'image/*',
    //     'aria-label': 'Upload your profile picture'
    //   }
    // })

    // if (file) {
    //   const reader = new FileReader()
    //   reader.onload = (e) => {
    //     Swal.fire({
    //       title: 'Your uploaded picture',
    //       imageUrl: e.target.result,
    //       imageAlt: 'The uploaded picture'
    //     })
    //   }
    //   reader.readAsDataURL(file)
    // }
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
          <button>Upload Resume</button>
        </div>
      </form>
    )
  }
}

export default UploadFile
