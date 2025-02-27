import visits from '@/_database/visits.json';
import { cookies } from 'next/headers';

export async function GET() {
    const ssid = (await cookies()).get('ssid');
    const userId = ssid.value;
    const visitsData = visits.filter(vis => vis.patient === parseInt(userId));
    return Response.json(visitsData);
}