
export async function POST() {
  const params = new URLSearchParams()
  params.append('FIELDS[NAME]','Josue')
  params.append('FIELDS[LAST_NAME]','Cornejo')
  params.append('FIELDS[EMAIL][0][VALUE]','urgosxd@gmail.com')
  params.append('FIELDS[EMAIL][0][VALUE_TYPE]','Work')
  params.append('FIELDS[PHONE][0][VALUE]','987654123')
  params.append('FIELDS[PHONE][0][VALUE]','987654123')
  params.append('FIELDS[PHONE][0][VALUE_TYPE]','Work')
  const res = await fetch('https://jushka.bitrix24.es/rest/307/k7cro1hl5lzveaf5/crm.contact.add.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      // 'API-Key': process.env.DATA_API_KEY!,
    },
    body:params
  })
 
  const data = await res.json()
 
  return Response.json(data)}
