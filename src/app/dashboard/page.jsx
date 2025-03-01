import { cookies } from 'next/headers';
import './page.module.css';
import { fetchData } from '@/utils/data';

async function Dashboard() {

  const userId = (await cookies()).get('ssid').value;
  const user = await fetchData(`users/${userId}`);
  const isPatient = user.role === 'patient';

  const visits = await fetchData('visits');
  const prescriptions = await fetchData('prescriptions');
  
  return (
    <div className='dashboardP'>
      {isPatient?<PatientDashboard user={user} visits={visits} prescriptions={prescriptions} />:<DoctorDashboard user={user} />}
    </div>
  )
}

export default Dashboard


function PatientDashboard({user, visits, prescriptions}){

  function getLastPharmacy(){
    for(let i = prescriptions.length-1; i >= 0; i--){
      if(prescriptions[i].pharmacy !== 'unknown'){
        return prescriptions[i].pharmacy;
      }
    }
  }

  function calcSumOfVisitPrices(){
    return visits.reduce((sum, visit)=> sum+visit.price, 0);
  }

  function calcSumOfPrescriptionPrices(){
    return prescriptions.reduce((total, presc) => {
      return total+(presc.content.reduce((sum, item) => sum+(item.count*item.price), 0))
    }, 0)
  }

  return(
    <div>
      <h2>{user.fullname}</h2>
      <p>you have been visited {visits.length} times this month!</p>
      <p>last pharmacy you have attended is {getLastPharmacy()}</p>
      <p>you have paied for visits {calcSumOfVisitPrices()} $</p>
      <p>you have paied for drugs {calcSumOfPrescriptionPrices()} $</p>
    </div>
  )
}

function DoctorDashboard({user}){
  return(
    <div></div>
  )
}