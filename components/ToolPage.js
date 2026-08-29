"use client";
import {useState} from "react";

export function ToolPage({title,description,children,output,helpTitle,helpText}){
 const [copied,setCopied]=useState(false);
 async function copy(){await navigator.clipboard.writeText(output);setCopied(true);setTimeout(()=>setCopied(false),1400)}
 return <main className="toolPage"><div className="wrap">
  <div className="crumb"><a href="/">MineTools</a> / {title}</div>
  <div className="toolIntro"><h1>{title}</h1><p>{description}</p></div>
  <div className="workspace"><section className="panel"><h2>Options</h2>{children}</section><section className="panel"><h2>Generated output</h2><div className="output">{output}</div><button className="copyBtn" onClick={copy}>{copied?"Copied!":"Copy"}</button></section></div>
  <section className="help"><h2>{helpTitle}</h2><p>{helpText}</p></section>
 </div></main>
}