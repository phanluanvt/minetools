"use client";
import {javaVersions,bedrockVersions} from "../data/minecraft";
export default function EditionVersion({edition,setEdition,version,setVersion}){
 const versions=edition==="Java"?javaVersions:bedrockVersions;
 return <div className="row"><div className="field"><label>Edition</label><select value={edition} onChange={e=>{setEdition(e.target.value);setVersion(e.target.value==="Java"?javaVersions[0]:bedrockVersions[0])}}><option>Java</option><option>Bedrock</option></select></div><div className="field"><label>Version</label><select value={version} onChange={e=>setVersion(e.target.value)}>{versions.map(v=><option key={v}>{v}</option>)}</select></div></div>
}