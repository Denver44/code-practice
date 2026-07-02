import { Modal } from './Modal.jsx'

// Matches the blog post: modal-as-layout-component

export default function ModalDemo() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Modal as a Layout Component</h1>
      <Modal>
        <h3>Hello from inside the modal</h3>
        <p>Click outside the box to close, or use the button below.</p>
      </Modal>
    </div>
  )
}
