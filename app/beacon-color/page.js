"use client";
import {useMemo,useState} from "react";import {ToolPage} from "../../components/ToolPage";
const dyes={white:[255,255,255],orange:[216,127,51],magenta:[178,76,216],light_blue:[102,153,216],yellow:[229,229,51],lime:[127,204,25],pink:[242,127,165],gray:[76,76,76],light_gray:[153,153,153],cyan:[76,127,153],purple:[127,63,178],blue:[51,76,178],brown:[102,76,51],green:[102,127,51],red:[153,51,51],black:[25,25,25]};
export default function Page(){
 const [a,setA]=useState("red"),[b,setB]=useState("blue");
 const rgb=useMemo(()=>dyes[a].map((v,i)=>Math.round((v+dyes[b][i])/2)),[a,b]);
 const out=`Approximate blended beacon color: rgb(${rgb.join(", ")}) • #${rgb.map(v=>v.toString(16).padStart(2,"0")).join("").toUpperCase()}`;
 return <ToolPage title="Minecraft Beacon Color Mixer" description="Estimate the blended color created by stacking stained glass colors above a beacon." output={out} helpTitle="Beacon beam colors" helpText="A beacon beam changes color as it passes through stained glass. This tool provides a quick RGB approximation for two selected colors and is intended as a visual planning aid.">
  <div className="row"><div className="field"><label>Glass color 1</label><select value={a} onChange={e=>setA(e.target.value)}>{Object.keys(dyes).map(x=><option key={x}>{x}</option>)}</select></div><div className="field"><label>Glass color 2</label><select value={b} onChange={e=>setB(e.target.value)}>{Object.keys(dyes).map(x=><option key={x}>{x}</option>)}</select></div></div>
  <div style={{height:130,borderRadius:12,background:`rgb(${rgb.join(",")})`,border:"1px solid #34513e"}}/>
 </ToolPage>
}