"use client";
import {useMemo,useState} from "react";import {ToolPage} from "../../components/ToolPage";
export default function Page(){
 const [line1,setLine1]=useState("Welcome to my server"),[line2,setLine2]=useState("Survival • Events • Fun"),[c1,setC1]=useState("§a"),[c2,setC2]=useState("§e"),[bold,setBold]=useState(false);
 const out=useMemo(()=>`${c1}${bold?"§l":""}${line1}\\n${c2}${line2}`,[line1,line2,c1,c2,bold]);
 return <ToolPage title="Minecraft Server MOTD Generator" description="Create a two-line legacy Minecraft server MOTD with colors and formatting." output={out} helpTitle="Using a server MOTD" helpText="Copy the generated value into the motd setting in server.properties. Color-code support may vary with server software and version, so test the final appearance in your server list.">
  <div className="field"><label>Line 1</label><input value={line1} onChange={e=>setLine1(e.target.value)}/></div>
  <div className="field"><label>Line 1 color</label><select value={c1} onChange={e=>setC1(e.target.value)}>{["§a","§b","§c","§d","§e","§f","§6","§9"].map(x=><option key={x}>{x}</option>)}</select></div>
  <div className="field"><label>Line 2</label><input value={line2} onChange={e=>setLine2(e.target.value)}/></div>
  <div className="field"><label>Line 2 color</label><select value={c2} onChange={e=>setC2(e.target.value)}>{["§a","§b","§c","§d","§e","§f","§6","§9"].map(x=><option key={x}>{x}</option>)}</select></div>
  <label className="check"><input type="checkbox" checked={bold} onChange={e=>setBold(e.target.checked)}/> Bold first line</label>
 </ToolPage>
}