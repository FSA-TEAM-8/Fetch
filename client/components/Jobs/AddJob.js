import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {job} from '../../store/job'
export default function AddJob() {
  const job = useSelector(state => state.job)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch()
  }, [])
  return <div />
}
