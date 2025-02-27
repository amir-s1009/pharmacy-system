import prescriptions from '@/_database/prescriptions.json';
import visits from '@/_database/visits.json';
import { cookies } from 'next/headers';

export async function GET() {
    const ssid = (await cookies()).get('ssid');
    const userId = ssid.value;
    const visitsData = visits.filter(vis => vis.patient === parseInt(userId));
    const prescriptsionsId = visitsData.map(vis => {
        return vis.prescription;
    })
    return Response.json(prescriptions.filter(presc => prescriptsionsId.includes(presc.id)));
}