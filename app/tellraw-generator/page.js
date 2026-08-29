"use client";
import {useMemo,useState} from "react";import {ToolPage} from "../../components/ToolPage";
export default function Page(){
 const [target,setTarget]=useState("@a"),[text,setText]=useState("Hello, player!"),[color,setColor]=useState("green"),[bold,setBold]=useState(false),[italic,setItalic]=useState(false);
 const out=useMemo(()=>`/tellraw ${target} ${JSON.stringify({text,color,...(bold?{bold:true}:{}),...(italic?{italic:true}:{})})}`,[target,text,color,bold,italic]);
 return <ToolPage title="Minecraft Tellraw Generator" description="Create a simple JSON /tellraw chat command for Minecraft Java Edition." output={out} helpTitle="What is /tellraw?" helpText="/tellraw displays JSON-formatted chat text to one or more players. MineTools currently supports the most common text styles; advanced click and hover events are planned for the full editor.">
  <div className="field"><label>Target</label><select value={target} onChange={e=>setTarget(e.target.value)}><option>@a</option><option>@p</option><option>@s</option><option>@r</option></select></div>
  <div className="field"><label>Message</label><textarea value={text} onChange={e=>setText(e.target.value)}/></div>
  <div className="field"><label>Color</label><select value={color} onChange={e=>setColor(e.target.value)}>{["white","yellow","gold","green","aqua","blue","light_purple","red","gray"].map(x=><option key={x}>{x}</option>)}</select></div>
  <div className="row"><label className="check"><input type="checkbox" checked={bold} onChange={e=>setBold(e.target.checked)}/> Bold</label><label className="check"><input type="checkbox" checked={italic} onChange={e=>setItalic(e.target.checked)}/> Italic</label></div>
 </ToolPage>
}