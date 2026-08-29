"use client";
import {useMemo,useState} from "react";import {ToolPage} from "../../components/ToolPage";
export default function Page(){
 const [flight,setFlight]=useState(1),[shape,setShape]=useState("small_ball"),[color,setColor]=useState("16711680"),[fade,setFade]=useState("16776960"),[trail,setTrail]=useState(true),[flicker,setFlicker]=useState(false);
 const typeMap={small_ball:0,large_ball:1,star:2,creeper:3,burst:4};
 const out=useMemo(()=>`/give @s minecraft:firework_rocket{Fireworks:{Flight:${flight}b,Explosions:[{Type:${typeMap[shape]}b,Colors:[I;${color}],FadeColors:[I;${fade}],Trail:${trail?1:0}b,Flicker:${flicker?1:0}b}]}} 1`,[flight,shape,color,fade,trail,flicker]);
 return <ToolPage title="Minecraft Firework Generator" description="Build a Java Edition firework rocket command with shape, colors, trail and flicker." output={out} helpTitle="Minecraft firework data" helpText="Firework explosion colors are stored as decimal RGB integers. This first generator uses direct color-number inputs; a full visual color picker and multi-explosion editor are planned.">
  <div className="row"><div className="field"><label>Flight</label><select value={flight} onChange={e=>setFlight(e.target.value)}><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></div><div className="field"><label>Shape</label><select value={shape} onChange={e=>setShape(e.target.value)}>{Object.keys(typeMap).map(x=><option key={x}>{x.replaceAll("_"," ")}</option>)}</select></div></div>
  <div className="field"><label>Main color (decimal RGB)</label><input value={color} onChange={e=>setColor(e.target.value)}/></div>
  <div className="field"><label>Fade color (decimal RGB)</label><input value={fade} onChange={e=>setFade(e.target.value)}/></div>
  <div className="row"><label className="check"><input type="checkbox" checked={trail} onChange={e=>setTrail(e.target.checked)}/> Trail</label><label className="check"><input type="checkbox" checked={flicker} onChange={e=>setFlicker(e.target.checked)}/> Flicker</label></div>
 </ToolPage>
}