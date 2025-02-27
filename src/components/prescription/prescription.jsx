import styles from '@/app/dashboard/_styles/table.module.css';
import dedicatedStyle from './prescription.module.css';
import { useEffect, useState, useCallback } from 'react';

function Prescription({prescriptionId}) {

    const [prescription, setPrescription] = useState(null);
    
    const calcTotalCost = useCallback(()=>{
        if(prescription){
            let totalPrice = 0;
            for(const item of prescription.content){
                totalPrice += item.price * item.count;
            }
            return totalPrice;
        }
    }, [prescription])

    useEffect(() => {
        async function getPrescription() {
            const response = await fetch(`http://localhost:3000/api/prescriptions/${prescriptionId}`, {credentials:"include"});
            const data = await response.json();
            setPrescription(data);
        }
        getPrescription();
    }, [])

  return (
    <div className={dedicatedStyle.prescriptionC} onClick={(e)=> e.stopPropagation()}>
        <div className={styles.tableWrapper}>
            <table>
                <tr>
                    <th>name</th>
                    <th>count</th>
                    <th>price</th>
                    <th>total price</th>
                </tr>
                {
                    prescription && prescription.content.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.count}</td>
                                <td>{item.price} $</td>
                                <td>{item.price * item.count} $</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
        <div className={dedicatedStyle.footer}>
            <p>total price to pay:</p>
            <p>{calcTotalCost()} $</p>
        </div>
    </div>
  )
}

export default Prescription