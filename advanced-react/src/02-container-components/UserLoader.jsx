import { useState, useEffect, Children, cloneElement, isValidElement } from 'react'

// UserLoader: fetches any user by ID. More flexible than CurrentUserLoader.

const mockUsers = {
  1: { id: 1, name: 'James', email: 'james@example.com', role: 'Engineer' },
  2: { id: 2, name: 'Denver', email: 'denver@example.com', role: 'Designer' },
  3: { id: 3, name: 'Neal', email: 'neal@example.com', role: 'Product' },
}

function mockFetchUser(userId) {
  return new Promise(resolve =>
    setTimeout(() => resolve(mockUsers[userId] ?? null), 500)
  )
}

export function UserLoader({ userId, children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    mockFetchUser(userId).then(setUser)
  }, [userId])

  return (
    <>
      {Children.map(children, child => {
        if (isValidElement(child)) {
          return cloneElement(child, { user })
        }
        return child
      })}
    </>
  )
}
