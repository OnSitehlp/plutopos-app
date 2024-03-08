"use client"

import { error } from "console";
import { useState } from "react"



export default function CertificadoLoad(){
  const [file, setFile]=useState<File>()
const onSubmit= async(e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  if (!file) return
  try{
    const data = new FormData()
    data.set('file', file)
    const res = await fetch("/api/upload", {
      method: 'POST',
      body: data
    })

    if(!res.ok) throw new Error(await res.text()) 
    const json = await res.json()
    console.log(json) 

  }
  catch(e:any){
    console.log(e)
      }

  }
  /* const formData = new FormData(e.currentTarget);
  const data = await axios.post('http://localhost:3000/api/emisor', formData);
  console.log(data); */


  return(
    <div>
      <form onSubmit={onSubmit}>
      <input type="file" name ="file" onChange={(e)=>setFile(e.target.files?.[0])}/>
      {/* <button onClick={()=>console.log(file)}>Click</button> */}
  <input type="submit" value="Cargar"/>
    </form> 
     </div>
  )
}