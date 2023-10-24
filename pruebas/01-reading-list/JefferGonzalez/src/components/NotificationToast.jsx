import { Toast, ToastContainer } from 'react-bootstrap'
import { NOTIFICATION_TYPES } from '../constants'

function NotificationToast ({ message = '', type = '', show, setShow }) {
  return (
    <ToastContainer
      className='p-3 text-white'
      position='bottom-end'
      style={{ zIndex: 1 }}
      hidden={!show}
    >
      <Toast
        bg={type || 'warning'}
        show={show}
        onClose={() => setShow(false)}
        delay={1500}
        autohide>
        <Toast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">
            {
              NOTIFICATION_TYPES[type.toUpperCase()] || NOTIFICATION_TYPES.WARNING
            }
          </strong>
        </Toast.Header>
        <Toast.Body>
          {message || 'Sin mensaje'}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  )
}

export default NotificationToast
