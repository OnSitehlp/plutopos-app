"use client"

import * as regionesData from"@/app/dashboard/datos/comunas.json"
const regiones=regionesData['regiones']
export default function SelectComuna({region}:any){
    const selectedRegion = regiones.find(r => r.region === region); 
const comunas=selectedRegion ? selectedRegion.comunas : [];
    return(
      <>
            {comunas.map((comuna)=>(
                <option key={comuna} value={comuna}>{comuna}</option>
            ))};
</>
        
    )
}