import React from 'react'
import { success, error, info, warn } from '../../utils/message'
import { useDispatch } from 'react-redux'
import { setLoading } from '../App/appSlice'

export default function Home() {
  const dispatch = useDispatch()
  let count = 0
  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => success(count++ * 1000000000, 10000)}>Success</button>
      <button onClick={() => error(count++ * 1000000000)}>Error</button>
      <button onClick={() => info(count++ * 1000000000)}>info</button>
      <button onClick={() => warn(count++ * 1000000000)}>Warn</button>
      <button
        onClick={() => {
          dispatch(setLoading(true))
          setTimeout(() => dispatch(setLoading(false)), 3000)
        }}
      >
        SetLoading
      </button>
    </div>
  )
}
