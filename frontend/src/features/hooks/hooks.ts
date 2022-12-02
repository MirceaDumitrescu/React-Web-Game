import { useEffect, useState } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../../store'
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
import Cookies from 'universal-cookie'

import { User } from '../interfaces/interfaces'
const cookies = new Cookies()

export const useLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState<unknown>()

  const token = cookies.get('token')

  useEffect(() => {
    if (!token) {
      setLoggedIn(false)
      return
    }

    const checkLoggedIn = async () => {
      const response = await fetch('http://localhost:5050/api/auth', {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      })
      if (response.status === 200) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    }
    checkLoggedIn()
  }, [])

  return loggedIn
}

export const useAdminUser = (data: User) => {
  const [adminUser, setAdminUser] = useState<unknown>()

  useEffect(() => {
    if (data && data.role === 'admin') {
      setAdminUser(true)
    } else {
      setAdminUser(false)
    }
  }, [data])

  return adminUser
}

export const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value: any) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}
