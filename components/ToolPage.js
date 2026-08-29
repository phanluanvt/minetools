"use client";
import {useState} from "react";
export function ToolPage({title,description,children,output,helpTitle,helpText}){
 const [copied,setCopied]=useState(false);
 async function copy(){try{await navigator.clipboard.writeText(output);setCopied(true);setTimeout(()=>setCopied(false),1400)}catch{}}
 function reset(){window.location.reload()}
 function share(){const url=window.location.href;if(navigator.share)navigator.share({title,url}).catch(()=>{});else navigator.clipboard.writeText(url).catch(()=>{})}
 return <main className="toolPage"><div className="wrap">
  <div className="crumb"><a href="/">MineTools</a> / {title}</div>
  <div className="toolIntro"><h1>{title}</h1><p>{description}</p></div>
  <div className="workspace"><section className="panel"><div className="panelTitle"><h2>Options</h2><button className="miniBtn" onClick={reset}>Reset</button></div>{children}</section><section className="panel"><div className="panelTitle"><h2>Generated output</h2><button className="miniBtn" onClick={share}>Share</button></div><div className="output">{output}</div><button className="copyBtn" onClick={copy}>{copied?"Copied!":"Copy output"}</button></section></div>
  <section className="help"><h2>{helpTitle}</h2><p>{helpText}</p><h3>Related tools</h3><div className="related"><a href="/target-selector">Target Selector</a><a href="/json-text-generator">JSON Text</a><a href="/color-codes">Color Codes</a><a href="/crafting">Crafting Recipes</a></div></section>
 </div></main>
}