"use client";
import {useEffect,useRef,useState} from "react";

export default function Page(){
 const [name,setName]=useState("Notch");
 const [active,setActive]=useState("Notch");
 const [showCape,setShowCape]=useState(false);
 const [showElytra,setShowElytra]=useState(false);
 const [error,setError]=useState("");
 const canvasRef=useRef(null);
 const viewerRef=useRef(null);

 useEffect(()=>{
  let cancelled=false;
  async function mount(){
   const skinview3d=await import("skinview3d");
   if(cancelled||!canvasRef.current)return;
   if(viewerRef.current){viewerRef.current.dispose();viewerRef.current=null}
   const skinUrl="https://mc-heads.net/skin/"+encodeURIComponent(active);
   const viewer=new skinview3d.SkinViewer({canvas:canvasRef.current,width:390,height:470,skin:skinUrl});
   viewer.zoom=0.82;
   viewer.autoRotate=true;
   viewer.autoRotateSpeed=0.7;
   viewer.controls.enableZoom=true;
   viewer.controls.enableRotate=true;
   viewerRef.current=viewer;
  }
  mount().catch(()=>setError("Unable to load this skin right now."));
  return()=>{cancelled=true;if(viewerRef.current){viewerRef.current.dispose();viewerRef.current=null}}
 },[active]);

 function grab(e){
  e.preventDefault();
  const n=name.trim();
  if(!/^[A-Za-z0-9_]{3,16}$/.test(n)){setError("Enter a valid Minecraft username (3–16 letters, numbers or underscore).");return}
  setError("");setActive(n);
 }
 const skinUrl="https://mc-heads.net/skin/"+encodeURIComponent(active);
 const downloadUrl="https://mc-heads.net/download/"+encodeURIComponent(active);

 return <div className="skinToolClassic">
   <form className="skinGrabBar" onSubmit={grab}>
    <input value={name} onChange={e=>setName(e.target.value)} aria-label="Minecraft username" />
    <button>GRAB THE SKIN</button>
   </form>
   {error&&<p className="skinError">{error}</p>}
   <div className="skinViewerStage"><canvas ref={canvasRef}/></div>
   <div className="skinChecks">
    <label><input type="checkbox" checked={showElytra} onChange={e=>setShowElytra(e.target.checked)}/> Show elytras</label>
    <label><input type="checkbox" checked={showCape} onChange={e=>setShowCape(e.target.checked)}/> Show the optifine cape</label>
   </div>
   <div className="skinButtons">
    <a href={downloadUrl}>DOWNLOAD THIS SKIN</a>
    <a href={skinUrl} target="_blank" rel="noreferrer">USE THIS SKIN</a>
   </div>
   <p className="skinCredit">Skin rendering uses the public MCHeads skin endpoint.</p>
 </div>
}