import { useState, useEffect, Children, cloneElement, isValidElement } from 'react'

// CurrentUserLoader: fetches the current logged-in user and injects it
// into every child as a `user` prop. Children never call useEffect themselves.

// Using a mock fetch so this works without a real server.
function mockFetchCurrentUser() {
  return new Promise(resolve =>
    setTimeout(() => resolve({ id: 1, name: 'James', email: 'james@example.com', role: 'Engineer' }), 500)
  )
}

export function CurrentUserLoader({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    mockFetchCurrentUser().then(setUser)
  }, [])

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
