"use client";
import style from "@/app/ui/dashboard/datos/emisor/addEmisor/addEmisor.module.css";
import * as regionesData from "@/app/dashboard/datos/comunas.json";
//import SelectComuna from "@/app/components/selectComuna";
import React, { useState } from "react";
import Select from "react-select";
import * as fs from "node:fs/promises"
import axios from "axios"

const regiones = regionesData["regiones"];

export default function AddEmisorPage() {
  //console.log(process.cwd());

  //console.log("regionesOnly "+ regionOnly)
  
  const [comunas, setComunas] = useState<string[]>(["Arica", "Camarones", "Putre", "General Lagos"]);
const [cetificado,setCertificado] = useState<File |undefined>()
const [file, setFile] = useState<File |undefined>()

const handleUpload=()=>{
  
  if(!file){
    console.log("No se ha seleccionado certificado")
    return
  }
console.log("file "+file.name)

const fd=new FormData()
fd.append('file', file)
}



  const handleSelectedChange = (event: any) => {
   
    const selectedRegion = regiones.find((r) => r.region === event.target.value);
    // const comunasSelected=selectedRegion? selectedRegion.comunas : []
    setComunas(selectedRegion ? selectedRegion.comunas : []);
    
  };


/* const handleFileChange =(e:React.FormEvent<HTMLInputElement>) =>{
  const target = e.target as HTMLInputElement &{
    files:FileList
  }
  setCertificado(target.files[0])
  console.log('target ', target.files[0].name);
  fs.cp(target.files[0].name,'/oldcert/certvigente.pfk',(err)=>{
    if (err){
      console.log(err);
    }
  })
} */

  const handleSelectedChangeComuna = (event: any) => {};
  return (
    <div className={style.container}>
      <form action="" className={style.form}>
        <input
          type="text"
          placeholder="Rut"
          name="rUTEmisor"
          id="rUTEmisor"
          required
        />

        <input
          type="text"
          placeholder="Razón Social"
          name="rznSocEmisor"
          id="rznSocEmisor"
          required
        />

        <input
          type="text"
          placeholder="Giro"
          name="giroEmisor"
          id="giroEmisor"
          required
        />
        <input
          type="text"
          placeholder="Dirección"
          name="dirOrigen"
          id="dirOrigen"
          required
        />
        {/*select Región*/}
       {/*  <Select
          // className={style.reactselect}
          placeholder="Región"
          options={regiones.map((region) => ({
            label: region.region,
            value: region.region,
            
          }))}
          isClearable
          isSearchable
          onChange={handleSelectedChange}
        />
        <Select
          // className={style.reactselect}
          placeholder="Ciudad"
          options={comunas.map((comuna) => ({
            label: comuna,
            value: comuna,
            
          }))}
          isClearable
          isSearchable
          onChange={handleSelectedChangeComuna}
        /> */}

          <select name="region" id="region" onChange={handleSelectedChange}>
          {regiones.map((region) => (
            <option key={region.region} value={region.region}>
              {region.region}
            </option>
          ))}
        </select>

        
          <select name="cmnaOrigen" id="cmnaOrigen">
          {comunas.map((comuna) => (
            <option key={comuna} value={comuna}>
              {comuna}
            </option>
          ))}
        </select>

      
        {/* <input type="file" accept=".pfx" name="certificado" id="certificado" onChange={handleFileChange}/>  */}
        <input type="file" accept=".pfx" name="certificado" id="certificado" onChange={ (e) =>{           
          setFile((e.target as HTMLInputElement).files![0])}}/>
        <button type="submit" onClick={handleUpload}>Guardar</button>
      </form>
    </div>
  );
}
