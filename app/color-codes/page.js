"use client";
import {useState} from "react";import {ToolPage} from "../../components/ToolPage";
const codes=[["0","Black"],["1","Dark Blue"],["2","Dark Green"],["3","Dark Aqua"],["4","Dark Red"],["5","Dark Purple"],["6","Gold"],["7","Gray"],["8","Dark Gray"],["9","Blue"],["a","Green"],["b","Aqua"],["c","Red"],["d","Light Purple"],["e","Yellow"],["f","White"],["l","Bold"],["o","Italic"],["n","Underline"],["m","Strikethrough"],["r","Reset"]];
export default function Page(){
 const [code,setCode]=useState("§a"); const out=`${code}Your text here`;
 return <ToolPage title="Minecraft Color Codes" description="Quick reference for legacy Minecraft section-sign color and formatting codes." output={out} helpTitle="Minecraft formatting codes" helpText="Legacy formatting uses the section sign followed by a code. Support varies by context and edition. Modern Java commands generally use JSON text components instead.">
  <div className="field"><label>Choose a code</label><select value={code} onChange={e=>setCode(e.target.value)}>{codes.map(([c,n])=><option key={c} value={"§"+c}>§{c} — {n}</option>)}</select></div>
  <div className="panel" style={{padding:14}}>{codes.map(([c,n])=><div key={c} style={{display:"flex",justifyContent:"space-between",padding:"7px 0",borderBottom:"1px solid #294334"}}><b>§{c}</b><span>{n}</span></div>)}</div>
 </ToolPage>
}