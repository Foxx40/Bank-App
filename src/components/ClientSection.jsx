import React from 'react'
import { clients } from '../constants'
import styles from '../style'
const ClientSection = () => {
  return (
   <section className={`${styles.flexStart } my-4`}>
     <div className={`${styles.flexCenter} flex-wrap w-full`} >
      {
        clients.map((client)=>(
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-48 min-w-25`}>
            <img src={client.logo} alt="client" className='sm:w-48 w-25 object-contain' />
          </div>
        ))
      }
     </div>
   </section>
  )
}

export default ClientSection
