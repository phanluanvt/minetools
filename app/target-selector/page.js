"use client";
import {useMemo,useState} from "react";import {ToolPage} from "../../components/ToolPage";
export default function Page(){
 const [base,setBase]=useState("@e"),[type,setType]=useState("zombie"),[distance,setDistance]=useState("..20"),[limit,setLimit]=useState("1"),[name,setName]=useState("");
 const out=useMemo(()=>{const p=[];if(type&&base==="@e")p.push("type="+type);if(distance)p.push("distance="+distance);if(limit)p.push("limit="+limit);if(name)p.push("name="+name);return base+(p.length?`[${p.join(",")}]`:"")},[base,type,distance,limit,name]);
 return <ToolPage title="Minecraft Target Selector" description="Build common Java Edition entity and player selectors without memorizing selector arguments." output={out} helpTitle="How target selectors work" helpText="Selectors such as @a and @e can be narrowed with arguments inside square brackets. This first version covers common filters; scores, tags, coordinates and rotations will be added in the advanced version.">
  <div className="field"><label>Selector</label><select value={base} onChange={e=>setBase(e.target.value)}><option>@e</option><option>@a</option><option>@p</option><option>@r</option><option>@s</option></select></div>
  <div className="field"><label>Entity type</label><input value={type} disabled={base!=="@e"} onChange={e=>setType(e.target.value)} placeholder="zombie"/></div>
  <div className="row"><div className="field"><label>Distance</label><input value={distance} onChange={e=>setDistance(e.target.value)} placeholder="..20"/></div><div className="field"><label>Limit</label><input value={limit} onChange={e=>setLimit(e.target.value)} placeholder="1"/></div></div>
  <div className="field"><label>Name (optional)</label><input value={name} onChange={e=>setName(e.target.value)}/></div>
 </ToolPage>
}