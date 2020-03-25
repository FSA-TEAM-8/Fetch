import React, {Component, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getSingleUser} from '../../store/single-user'
import download from 'downloadjs'

const DownloadFile = props => {
  const user = props.user
  return (
    <div>
      <button
        type="button"
        onClick={async () => {
          const res = await fetch('http://localhost:8080/download')
          const blob = await res.blob(`${user.lastName}resume.pdf`)
          console.log('THE BLOB', blob)
          download(blob, `${user.lastName}resume.pdf`)
        }}
      >
        Download
      </button>
    </div>
  )
}

export default DownloadFile
