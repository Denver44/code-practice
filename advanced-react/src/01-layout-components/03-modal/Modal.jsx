import { useState } from 'react'

// Modal: a layout component that controls its own visibility.
// ModalBackground closes the modal when clicked.
// ModalContent stops the click from bubbling up to ModalBackground.

const backdropStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const contentStyle = {
  background: '#fff',
  padding: '2rem',
  borderRadius: '8px',
  minWidth: '300px',
}

function ModalBackground({ onClose, children }) {
  return (
    <div style={backdropStyle} onClick={onClose}>
      {children}
    </div>
  )
}

function ModalContent({ children }) {
  return (
    // stopPropagation prevents a click inside the box from closing the modal
    <div style={contentStyle} onClick={e => e.stopPropagation()}>
      {children}
    </div>
  )
}

export function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && (
        <ModalBackground onClose={() => setIsOpen(false)}>
          <ModalContent>
            {children}
            <br />
            <button onClick={() => setIsOpen(false)}>Close</button>
          </ModalContent>
        </ModalBackground>
      )}
    </>
  )
}
