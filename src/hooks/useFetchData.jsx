import { useEffect, useState } from 'react'

const useFetchData = (url) => {
  const currencyRequestURL = url
  const request = new XMLHttpRequest()

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  request.open('GET', currencyRequestURL)
  request.responseType = 'json'
  request.send()
  useEffect(() => {
    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          setData(request.response)
        } else {
          setError(`Error, ${request.statusText}`)
        }
        setLoading(true)
      }
    }
  }, [])

  return { data, loading, error }
}

export { useFetchData }
