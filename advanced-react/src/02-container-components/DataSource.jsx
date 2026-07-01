import { useState, useEffect, Children, cloneElement, isValidElement } from 'react'

// DataSource: the most generic container. Accepts any async function as getData.
// Works with a REST endpoint, localStorage, IndexedDB — anything that returns a promise.

export function DataSource({ getData, resourceName, children }) {
  const [resource, setResource] = useState(null)

  useEffect(() => {
    getData().then(setResource)
  }, [getData])

  return (
    <>
      {Children.map(children, child => {
        if (isValidElement(child)) {
          return cloneElement(child, { [resourceName]: resource })
        }
        return child
      })}
    </>
  )
}
