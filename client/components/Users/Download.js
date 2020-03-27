import React, {Component, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getSingleUser} from '../../store/single-user'
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
