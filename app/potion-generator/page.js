"use client";
import {useMemo,useState} from "react";import {ToolPage} from "../../components/ToolPage";
const effects=["speed","slowness","haste","mining_fatigue","strength","instant_health","instant_damage","jump_boost","regeneration","resistance","fire_resistance","water_breathing","invisibility","night_vision","weakness","poison","slow_falling"];
export default function Page(){
 const [effect,setEffect]=useState("speed"),[duration,setDuration]=useState(60),[amplifier,setAmplifier]=useState(0),[target,setTarget]=useState("@s"),[hide,setHide]=useState(false);
 const out=useMemo(()=>`/effect give ${target} minecraft:${effect} ${Math.max(1,Number(duration)||1)} ${Math.max(0,Number(amplifier)||0)} ${hide?"true":"false"}`,[effect,duration,amplifier,target,hide]);
 return <ToolPage title="Minecraft Potion Effect Generator" description="Generate a Java Edition /effect command with duration, amplifier and hidden particles." output={out} helpTitle="How potion effect levels work" helpText="Minecraft command amplifiers start at 0, so amplifier 0 is level I, 1 is level II, and so on. Duration is entered in seconds for the /effect command.">
  <div className="field"><label>Target</label><select value={target} onChange={e=>setTarget(e.target.value)}><option>@s</option><option>@p</option><option>@a</option></select></div>
  <div className="field"><label>Effect</label><select value={effect} onChange={e=>setEffect(e.target.value)}>{effects.map(x=><option key={x}>{x.replaceAll("_"," ")}</option>)}</select></div>
  <div className="row"><div className="field"><label>Duration (seconds)</label><input type="number" min="1" value={duration} onChange={e=>setDuration(e.target.value)}/></div><div className="field"><label>Amplifier</label><input type="number" min="0" value={amplifier} onChange={e=>setAmplifier(e.target.value)}/></div></div>
  <label className="check"><input type="checkbox" checked={hide} onChange={e=>setHide(e.target.checked)}/> Hide particles</label>
 </ToolPage>
}