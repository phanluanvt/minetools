"use client";
import {useMemo,useState} from "react";import {ToolPage} from "../../components/ToolPage";
const mobs=["zombie","skeleton","creeper","spider","enderman","villager","iron_golem","warden","piglin","witch"];
export default function Page(){
 const [mob,setMob]=useState("zombie"),[name,setName]=useState(""),[health,setHealth]=useState(20),[baby,setBaby]=useState(false),[silent,setSilent]=useState(false),[glowing,setGlowing]=useState(false),[noAI,setNoAI]=useState(false),[invulnerable,setInvulnerable]=useState(false);
 const out=useMemo(()=>{const data=[];if(name)data.push(`CustomName:'{"text":"${name.replaceAll("'","\\'")}"}'`,`CustomNameVisible:1b`);if(health)data.push(`Health:${Number(health)}f`);if(baby&&["zombie","villager","piglin"].includes(mob))data.push("IsBaby:1b");if(silent)data.push("Silent:1b");if(glowing)data.push("Glowing:1b");if(noAI)data.push("NoAI:1b");if(invulnerable)data.push("Invulnerable:1b");return `/summon minecraft:${mob} ~ ~ ~${data.length?` {${data.join(",")}}`:""}`},[mob,name,health,baby,silent,glowing,noAI,invulnerable]);
 return <ToolPage title="Minecraft Mob Generator" description="Create a Minecraft Java summon command with common mob settings." output={out} helpTitle="Minecraft summon command generator" helpText="Choose a mob and configure common NBT options. This is the first working Mob Generator version; equipment, attributes, passengers, drop chances and mob-specific settings will be added in the advanced phase.">
  <div className="field"><label>Mob</label><select value={mob} onChange={e=>setMob(e.target.value)}>{mobs.map(x=><option key={x}>{x}</option>)}</select></div>
  <div className="field"><label>Custom name</label><input value={name} onChange={e=>setName(e.target.value)} placeholder="Optional"/></div>
  <div className="field"><label>Health</label><input type="number" min="1" value={health} onChange={e=>setHealth(e.target.value)}/></div>
  <div className="row"><label className="check"><input type="checkbox" checked={baby} onChange={e=>setBaby(e.target.checked)}/> Baby</label><label className="check"><input type="checkbox" checked={silent} onChange={e=>setSilent(e.target.checked)}/> Silent</label></div>
  <div className="row"><label className="check"><input type="checkbox" checked={glowing} onChange={e=>setGlowing(e.target.checked)}/> Glowing</label><label className="check"><input type="checkbox" checked={noAI} onChange={e=>setNoAI(e.target.checked)}/> No AI</label></div>
  <label className="check"><input type="checkbox" checked={invulnerable} onChange={e=>setInvulnerable(e.target.checked)}/> Invulnerable</label>
 </ToolPage>
}