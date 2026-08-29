"use client";
import {useMemo,useState} from "react";import {ToolPage} from "../../components/ToolPage";
export default function Page(){
 const [x,setX]=useState(800),[z,setZ]=useState(-400),[mode,setMode]=useState("overworld");
 const out=useMemo(()=>{const f=mode==="overworld"?1/8:8;return `${mode==="overworld"?"Nether":"Overworld"} coordinates\nX: ${Math.round(Number(x)*f*100)/100}\nZ: ${Math.round(Number(z)*f*100)/100}`},[x,z,mode]);
 return <ToolPage title="Minecraft Coordinate Calculator" description="Convert X and Z coordinates between the Overworld and Nether using the 8:1 horizontal scale." output={out} helpTitle="Overworld to Nether coordinates" helpText="For X and Z, divide Overworld coordinates by 8 to estimate the matching Nether position. Multiply Nether coordinates by 8 to convert back. Y is not converted by this tool.">
  <div className="field"><label>Convert from</label><select value={mode} onChange={e=>setMode(e.target.value)}><option value="overworld">Overworld</option><option value="nether">Nether</option></select></div>
  <div className="row"><div className="field"><label>X</label><input type="number" value={x} onChange={e=>setX(e.target.value)}/></div><div className="field"><label>Z</label><input type="number" value={z} onChange={e=>setZ(e.target.value)}/></div></div>
 </ToolPage>
}