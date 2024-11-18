'use client'

import withRouteGuard from '@/components/RouteGuard'
import styles from '../../styles/pending.module.css'

export const PendingVerificationPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Email Verification Pending</h1>
        <p className={styles.message}>
          Please verify your email address before proceeding. Check your inbox for the verification link.
        </p>
      </div>
    </div>
  )
}

export default withRouteGuard(PendingVerificationPage)