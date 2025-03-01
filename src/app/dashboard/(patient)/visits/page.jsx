'use client'

import {useModal} from '@/hooks/modal';
import styles from '../../_styles/table.module.css';
import Modal from '@/components/modal/modal';
import Prescription from '@/components/prescription/prescription';
import { useState } from 'react';
import { useFetchData } from '@/hooks/data';

function Visits() {

  const [isOpen, handleOpen, handleClose] = useModal(false);
  const [prescriptionId, setPrescriptionId] = useState(undefined);

  const visits = useFetchData("visits", []);

  return (
    <>
    <div className={styles.tableWrapper}>
        <table>
          <tr>
            <th>Doctor</th>
            <th>Date</th>
            <th>Insurance</th>
            <th>Price</th>
            <th>Prescription</th>
          </tr>
          {
            visits.map((visit, index) => {
              return(
                <tr key={index}>
                  <td>{visit.doctor}</td>
                  <td>{new Date().toLocaleDateString('En')}</td>
                  <td>{visit.insurance}</td>
                  <td>{visit.price} $</td>
                  <td>
                    <button onClick={() => {
                      handleOpen();
                      setPrescriptionId(visit.prescription);
                    }}>View</button>
                  </td>
                </tr>
              )
            })
          }
        </table>
    </div>
    <Modal isOpen={isOpen} handleOpen={handleOpen} handleClose={handleClose}>
      <Prescription prescriptionId={prescriptionId} />
    </Modal>
    </>
  )
}

export default Visits