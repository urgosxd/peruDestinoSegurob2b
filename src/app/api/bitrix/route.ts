import qs from "qs"
import fetch from "node-fetch"

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

  const document = await request.json();
  
  console.log("ENTREE")
  console.log(document)
  
  try{
  const currentDateTime = new Date()
  const formatedDateTime = currentDateTime.toISOString()
    const params:{[keys:string]:string} = {

    }
    
  params['FIELDS[TITLE]']  = "Formulario PAGINA B2B Peru Destino Seguro"
  // params['FIELDS[UF_CRM_LEAD_1712673755506]'] = data.month
  params['FIELDS[DATE_CREATE]'] = formatedDateTime
  params['FIELDS[ADDRESS_COUNTRY]']=document.pais
  params['FIELDS[NAME]']  = document.nombre
  params['FIELDS[LAST_NAME]'] = document.apellido
  params['FIELDS[EMAIL x [0][VALUE]'] = document.email
  params['FIELDS[EMAIL][0][VALUE_TYPE]'] ='Work'
  params['FIELDS[PHONE][0][VALUE]'] = document.phone
  params['FIELDS[PHONE][0][VALUE_TYPE]'] = 'Work'
  params['FIELDS[COMPANY_TITLE]'] = document.companyName + " Tipo de Empresa: " + document.companyType
  params['FIELDS[COMMENTS]'] = document.mensaje


    console.log(params)
    console.log(process.env.BITRIX)
    const res = await fetch(`${process.env.BITRIX}crm.lead.add.json`,{
      method: 'POST',
      headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: qs.stringify(params),
    })

    if (!res.ok){
      return res.text().then(text => { throw new Error(text) })
    }

    return new Response(`Revalidate`, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
 

      }
  catch{
    console.log("EROOOR CATCHA")
   return new Response(`Revalidate`, {
    status: 400,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
    
  }
  

  }
