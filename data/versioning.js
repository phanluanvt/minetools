export const versionRules={
 Java:{
  "1.21.x":{label:"Java 1.21.x",itemComponents:true,legacyNbt:false},
  "1.20.x":{label:"Java 1.20.x",itemComponents:false,legacyNbt:true},
  "1.19.x":{label:"Java 1.19.x",itemComponents:false,legacyNbt:true}
 },
 Bedrock:{
  "1.21.x":{label:"Bedrock 1.21.x",itemComponents:false,legacyNbt:false},
  "1.20.x":{label:"Bedrock 1.20.x",itemComponents:false,legacyNbt:false}
 }
};
export function ruleFor(edition,version){return versionRules[edition]?.[version]||null}
export function namespace(id){return id.includes(":")?id:"minecraft:"+id}
