'use client'

import { useModal } from '@/hooks/modal';
import styles from '../../_styles/table.module.css';
import { useFetchData } from '@/hooks/data';
import Modal from '@/components/modal/modal';
import Prescription from '@/components/prescription/prescription';
import { useState } from 'react';

function Prescriptions() {

  const prescriptions = useFetchData('prescriptions', []);
  const [isOpen, handleOpen, handleClose] = useModal(false);
  const [prescriptionId, setPrescriptionId] = useState(undefined);

  return (
    <>
    <div className={styles.tableWrapper}>
      <table>
        <tr>
          <th>Date</th>
          <th>Insurance</th>
          <th>Price</th>
          <th>Drugs</th>
          <th>Status</th>
          <th>Pharmacy</th>
        </tr>
        {
          prescriptions.map((presc, index) => {
            return(
              <tr key={index}>
                <td>{new Date().toLocaleDateString('En')}</td>
                <td>{presc.insurance}</td>
                <td>{presc.content.reduce((totalSum, item) =>  totalSum+(item.price*item.count), 0)} $</td>
                <td>
                  <button onClick={() => {
                    handleOpen();
                    setPrescriptionId(presc.id);
                  }}>View</button>
                </td>
                <td>{presc.status}</td>
                <td>{presc.pharmacy}</td>
              </tr>
            )
          })
        }
      </table>
    </div>
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <Prescription prescriptionId={prescriptionId} />
    </Modal>
    </>
  )
}

export default Prescriptions