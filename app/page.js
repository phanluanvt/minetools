export const metadata={title:"Minecraft Tools",description:"Minecraft generators, crafting tools, calculators and editors."};
const cards=[["CRAFTING RECIPES","/crafting","craft"],["COMMAND GENERATOR","/tellraw-generator","command"],["FLAT WORLD GENERATOR","/flat-world-generator","flat"],["MOB SPAWNER","/mob-generator","mobs"],["POTION GENERATOR","/potion-generator","potion"],["FIREWORKS GENERATOR","/firework-generator","firework"],["BANNER GENERATOR","/banner-generator","banner"],["ENCHANT CALCULATOR","/enchant-calculator","enchant"],["SKIN GRABBER","/skin-grabber","skin"],["UUID FINDER","/skin-grabber","uuid"],["BEACON COLOR","/beacon-color","beacon"],["ARMOR COLOR","/armor-color","armor"],["TEXT GENERATORS","/color-codes","text"],["BOOK EDITOR","/book-generator","book"],["TELLRAW EDITOR","/tellraw-generator","tellraw"],["COORDINATE CALCULATOR","/coordinate-calculator","coord"]];

export default function Home(){
  return <div className="refHome">
    <div className="refTitleRow">
      <div>
        <h1>MINECRAFT TOOLS</h1>
        <h2>COMMUNITY CONTENT</h2>
      </div>
      <a href="/community">VIEW ALL →</a>
    </div>

    <section className="communityBanner">
      <div className="chestIcon">▦</div>
      <div><strong>Share your creations with the community!</strong><span>Upload your maps, data packs, mods, and more.</span></div>
      <a href="/community">BROWSE COMMUNITY</a>
    </section>

    <h2 className="toolsHeading">TOOLS</h2>

    <div className="refGrid">
      {cards.map(([title,href,type])=><a className="refCard" href={href} key={title}>
        <div className="refCardTitle">{title}</div>
        <div className={"refPreview preview-"+type}>
          <span className="previewMain"></span>
          <span className="previewAux"></span>
          {type==="uuid"&&<div className="uuidMock"><span>Name: Notch</span><span>UUID: 069a79f444e94726a5befca90e38aaf5</span><button>COPY</button></div>}
          {type==="coord"&&<div className="coordMock"><span>X: <b>100</b></span><span>Y: <b>64</b></span><span>Z: <b>-250</b></span><button>CALCULATE</button></div>}
          {type==="text"&&<div className="textMock"><i>§a Green Text</i><i>§b Aqua Text</i><i>§c Red Text</i><i>§d Light Purple Text</i></div>}
          {type==="tellraw"&&<pre className="codeMock">{'{\n  "text": "Hello",\n  "color": "green",\n  "bold": true\n}'}</pre>}
        </div>
      </a>)}
    </div>
  </div>
}