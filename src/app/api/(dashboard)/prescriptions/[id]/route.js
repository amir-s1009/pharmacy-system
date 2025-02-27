import prescriptions from '@/_database/prescriptions.json';

export async function GET(req, {params}) {
    const id = (await params).id;
    const data = prescriptions.find(presc => presc.id === parseInt(id));
    return Response.json(data);
}