"use client";
import {useMemo,useState} from "react";import {ToolPage} from "../../components/ToolPage";
const ench=["sharpness","smite","bane_of_arthropods","knockback","fire_aspect","looting","efficiency","silk_touch","unbreaking","fortune","power","punch","flame","infinity","protection","feather_falling","respiration","aqua_affinity","mending"];
export default function Page(){
 const [target,setTarget]=useState("@s"),[enchant,setEnchant]=useState("sharpness"),[level,setLevel]=useState(5);
 const out=useMemo(()=>`/enchant ${target} minecraft:${enchant} ${level}`,[target,enchant,level]);
 return <ToolPage title="Minecraft Enchant Command Generator" description="Generate a basic Java Edition /enchant command for common enchantments." output={out} helpTitle="Using the /enchant command" helpText="The selected target must be holding an item compatible with the enchantment, and Minecraft still enforces normal enchantment compatibility and supported levels for /enchant.">
  <div className="field"><label>Target</label><select value={target} onChange={e=>setTarget(e.target.value)}><option>@s</option><option>@p</option><option>@a</option></select></div>
  <div className="field"><label>Enchantment</label><select value={enchant} onChange={e=>setEnchant(e.target.value)}>{ench.map(x=><option key={x} value={x}>{x.replaceAll("_"," ")}</option>)}</select></div>
  <div className="field"><label>Level</label><input type="number" min="1" max="255" value={level} onChange={e=>setLevel(e.target.value)}/></div>
 </ToolPage>
}