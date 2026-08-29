"use client";
import {useMemo,useState} from "react";
const tools=[
 ["Mob Generator","summon entity zombie creeper mob","/mob-generator"],
 ["Potion Generator","potion effect speed strength","/potion-generator"],
 ["Firework Generator","rocket star creeper firework","/firework-generator"],
 ["Enchant Generator","enchant sharpness mending fortune","/enchant-generator"],
 ["Coordinate Calculator","nether overworld chunk coordinates","/coordinate-calculator"],
 ["Target Selector","selector @e @a entity target","/target-selector"],
 ["Tellraw Generator","tellraw json chat command","/tellraw-generator"],
 ["Title Generator","title subtitle actionbar command","/title-generator"],
 ["Server MOTD","motd server properties color","/motd-generator"],
 ["Color Codes","section sign formatting colors","/color-codes"],
 ["Beacon Color Mixer","beacon stained glass color","/beacon-color"],
 ["Armor Color","leather armor rgb hex","/armor-color"],
 ["Flat World Generator","superflat preset layers biome","/flat-world-generator"],
 ["Crafting Recipes","recipe item crafting grid","/crafting"],
 ["Banner Generator","banner pattern layers colors","/banner-generator"],
 ["Shield Generator","shield banner pattern","/shield-generator"],
 ["JSON Text Generator","json text click hover component","/json-text-generator"],
 ["Sign Generator","sign text command click","/sign-generator"],
 ["Book Generator","written book pages author title","/book-generator"],
 ["Loot Table Generator","loot json pool entry weight","/loot-table-generator"]
];
export default function ToolSearch(){
 const [q,setQ]=useState("");
 const matches=useMemo(()=>q.trim()?tools.filter(t=>(t[0]+" "+t[1]).toLowerCase().includes(q.toLowerCase())).slice(0,7):[],[q]);
 return <div className="toolSearch">
  <input aria-label="Search Minecraft tools" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search Minecraft tools…"/>
  {matches.length>0&&<div className="searchResults">{matches.map(t=><a href={t[2]} key={t[0]} onClick={()=>setQ("")}><strong>{t[0]}</strong><span>Open tool →</span></a>)}</div>}
 </div>
}