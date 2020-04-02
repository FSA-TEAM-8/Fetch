import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import axios from 'axios'

const Swal = require('sweetalert2')

class UploadFile extends React.Component {
  constructor(props) {
    super(props)

    this.onFileChange = this.onFileChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      profileImg: ''
    }
  }

  onFileChange(e) {
    this.setState({profileImg: e.target.files[0]})
  }

  onSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('profileImg', this.state.profileImg, this.state.user)
    axios.post('/upload', formData, {}).then(res => {
      console.log(res)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <Input type="file" onChange={this.onFileChange} />
            </div>
            <div className="form-group">
              <Button
                variant="contained"
                color="primary"
                className="btn btn-primary"
                type="submit"
              >
                Upload
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default UploadFile
