'use client'

import {useModal} from '@/hooks/modal';
import styles from '../../_styles/table.module.css';
import Modal from '@/components/modal/modal';
import Prescription from '@/components/prescription/prescription';
import { useState, useEffect } from 'react';

function Visits() {

  const [isOpen, handleOpen, handleClose] = useModal(false);
  const [visits, setVisits] = useState([]);
  const [prescriptionId, setPrescriptionId] = useState(undefined);
  
  useEffect(()=>{
    async function getVisits(){
      const response = await fetch("http://localhost:3000/api/visits", {credentials:"include"});
      const data = await response.json();
      setVisits(data);
    }
    getVisits();
  }, []);

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