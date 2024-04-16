import { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.scss'

interface Props {
  onClose(): void
  visible: boolean
  createModal?: boolean
  children: ReactNode
}

const Modal: React.FC<Props> = ({ visible, children, onClose }) => {
  return <>{visible && ReactDOM.createPortal(<div className={styles.modalContainer}>{children}</div>, document.body)}</>
}

export default Modal
