"use client";
import {useMemo,useState} from "react";import {ToolPage} from "../../components/ToolPage";
export default function Page(){
 const [target,setTarget]=useState("@a"),[title,setTitle]=useState("Welcome!"),[subtitle,setSubtitle]=useState("Have fun"),[color,setColor]=useState("gold"),[fadeIn,setFadeIn]=useState(10),[stay,setStay]=useState(70),[fadeOut,setFadeOut]=useState(20);
 const out=useMemo(()=>[
  `/title ${target} times ${fadeIn} ${stay} ${fadeOut}`,
  `/title ${target} title ${JSON.stringify({text:title,color})}`,
  subtitle?`/title ${target} subtitle ${JSON.stringify({text:subtitle,color:"white"})}`:""
 ].filter(Boolean).join("\n"),[target,title,subtitle,color,fadeIn,stay,fadeOut]);
 return <ToolPage title="Minecraft Title Generator" description="Generate Java Edition /title commands with timing, title, subtitle and color." output={out} helpTitle="How to use the title generator" helpText="Choose a target selector, enter the text, then copy the generated commands into Minecraft. Timing values are measured in ticks; 20 ticks is roughly one second.">
  <div className="field"><label>Target</label><select value={target} onChange={e=>setTarget(e.target.value)}><option>@a</option><option>@p</option><option>@s</option><option>@r</option></select></div>
  <div className="field"><label>Title</label><input value={title} onChange={e=>setTitle(e.target.value)}/></div>
  <div className="field"><label>Subtitle</label><input value={subtitle} onChange={e=>setSubtitle(e.target.value)}/></div>
  <div className="field"><label>Color</label><select value={color} onChange={e=>setColor(e.target.value)}>{["white","gold","yellow","green","aqua","blue","light_purple","red","dark_red","gray"].map(x=><option key={x}>{x}</option>)}</select></div>
  <div className="row"><div className="field"><label>Fade in</label><input type="number" value={fadeIn} onChange={e=>setFadeIn(e.target.value)}/></div><div className="field"><label>Stay</label><input type="number" value={stay} onChange={e=>setStay(e.target.value)}/></div></div>
  <div className="field"><label>Fade out</label><input type="number" value={fadeOut} onChange={e=>setFadeOut(e.target.value)}/></div>
 </ToolPage>
}