import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {me} from '../../store/user'
import {updateSingleUser} from '../../store/single-user'
import Button from '@material-ui/core/Button'



const Swal = require('sweetalert2')


const SaveJob = props => {
  const job = props.job
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(me) // gets the current logged in user
    },
    [user]
  )
  const onClick = () => {
    if (!user.savedJobs.includes(job._id)) {
      user.savedJobs.push(job._id)
      dispatch(updateSingleUser(user))
      console.log('saved!')

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: toast => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      console.log('got to before toast fire')
      Toast.fire({
        icon: 'success',
        title: 'Successfully Saved Job Listing!'
      })
    } else {
      console.log('clicked save job but nothing happened')
    }
  }

  return (
    <div>

      <Button type="submit" onClick={onClick} variant="contained">

        Save Job
      </Button>
    </div>
  )
}

export default SaveJob
