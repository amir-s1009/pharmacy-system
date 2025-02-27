'use client'

import { useEffect, useState } from 'react';
import styles from '../../_styles/table.module.css';

function Prescriptions() {

  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    async function getPrescriptions() {
      const response = await fetch("http://localhost:3000/api/prescriptions", {credentials:"include"});
      const data = await response.json();
      setPrescriptions(data);
    }
    getPrescriptions();
  }, []);

  return (
    <div className={styles.tableWrapper}>
      <table>
        <tr>
          <th>Date</th>
          <th>Insurance</th>
          <th>Price</th>
          <th>Prescription</th>
          <th>Status</th>
          <th>Pharmacy</th>
        </tr>
        {
          prescriptions.map((presc, index) => {
            return(
              <tr>
                <td>{new Date().toLocaleDateString('En')}</td>
                <td>{presc.insurance}</td>
                <td>{presc.content.reduce((totalSum, item) =>  totalSum+(item.price*item.count), 0)} $</td>
                <td>
                  <button>View</button>
                </td>
                <td>{presc.status}</td>
                <td>{presc.pharmacy}</td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default Prescriptions