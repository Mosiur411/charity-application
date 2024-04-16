import Link from 'next/link'
import styles from './Modal.module.scss'

interface DonationPopupProps {
  setOpenDonation: (value: boolean) => void
  openDonation: boolean
}
const DonationPopup: React.FC<DonationPopupProps> = ({ setOpenDonation, openDonation }) => {
  // Component implementation
  return (
    <div className={styles?.modalContainer}>
      <section className={styles.mainContent}>
        <p>
          <i onClick={() => setOpenDonation(!openDonation)} className="fa-regular fa-circle-xmark"></i>
        </p>
        <div>
          <Link href="/payment" className={styles.donateNow}>
            Donate Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default DonationPopup
