import styles from '@/app/dashboard/_styles/table.module.css';
import dedicatedStyle from './prescription.module.css';
import { useCallback } from 'react';
import { useFetchData } from '@/hooks/data';

function Prescription({prescriptionId}) {

    const prescription = useFetchData(`prescriptions/${prescriptionId}`, undefined);
    
    const calcTotalCost = useCallback(()=>{
        if(prescription){
            const totalSum = prescription.content.reduce((total, item) => total+(item.count*item.price), 0);
            return totalSum;
        }
    }, [prescription])

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