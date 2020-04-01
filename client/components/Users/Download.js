import React from 'react'
import download from 'downloadjs'
import Button from '@material-ui/core/Button'

const DownloadFile = props => {
  const user = props.user
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={async () => {
          const res = await fetch('http://localhost:8080/download')
          const blob = await res.blob(`${user.lastName}resume.pdf`)
          console.log('THE BLOB', blob)
          download(blob, `${user.lastName}resume.pdf`)
        }}
      >
        Download
      </Button>
    </div>
  )
}

export default DownloadFile
