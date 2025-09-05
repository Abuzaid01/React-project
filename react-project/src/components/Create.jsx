import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const Create = () => {
  const [user, setUser] = useState({
    id: uuidv4(),
    name: '',
    email: '',
    image: '',
  })

  const navigate = useNavigate()

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:3000/users', user)
      .then((result) => {
        navigate('/')
        console.log(result)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="w-100 d-flex justify-content-center align-items-center">
      <div className="w-50 border mt-5 rounded bg-secondary text-white p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Your Full Name"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Your Email"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="image">Image:</label>
            <input
              type="text"
              name="image"
              className="form-control"
              placeholder="Enter Image URL"
              onChange={handleInput}
            />
          </div>
          <button className="btn btn-info mt-3">Submit</button>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </form>
      </div>
    </div>
  )
}

export default Create
