export const dynamic = "force-dynamic";
export const revalidate = 0;
import ToolSearch from "../components/ToolSearch";
const tools=[
["✦","Title Generator","Build /title commands with subtitle, timing and colors.","/title-generator"],
["💬","Tellraw Generator","Create JSON chat messages and ready-to-use /tellraw commands.","/tellraw-generator"],
["☠","Mob Generator","Create summon commands with common mob NBT settings.","/mob-generator"],
["🧪","Potion Effects","Generate /effect commands with duration, amplifier and particles.","/potion-generator"],
["🎆","Firework Generator","Build firework commands with shape, color, trail and flicker.","/firework-generator"],
["⌖","Coordinate Calculator","Convert Overworld and Nether X/Z coordinates instantly.","/coordinate-calculator"],
["§","Color Codes","Minecraft formatting codes for chat, MOTD and legacy text.","/color-codes"],
["◎","Target Selector","Build @a, @e, @p, @r and @s selectors with common filters.","/target-selector"],
["⚔","Enchant Command","Generate /enchant commands for common Java enchantments.","/enchant-generator"],
["▤","Server MOTD","Create a colored two-line Minecraft server MOTD.","/motd-generator"],
["◆","Beacon Color Mixer","Estimate a beacon beam color from stained glass.","/beacon-color"],
["🎨","Armor Color","Convert HEX colors into dyed leather armor commands.","/armor-color"],
["🌎","Flat World Generator","Create superflat presets from layers and biomes.","/flat-world-generator"]
];
export default function Home(){return <main>
<section className="hero"><div className="wrap"><span className="badge">FREE MINECRAFT UTILITIES</span><h1>Minecraft tools.<br/>Built to be useful.</h1><p>Fast generators, calculators and command builders for Minecraft players, server owners and map makers. No signup required.</p><ToolSearch/><div className="heroActions"><a className="button primary" href="#tools">Explore tools</a><a className="button" href="/mob-generator">Try Mob Generator</a></div><div className="stats"><div className="stat"><b>13</b><span>working tools</span></div><div className="stat"><b>0</b><span>login walls</span></div><div className="stat"><b>100%</b><span>mobile friendly</span></div></div></div></section>
<section className="section" id="tools"><div className="wrap"><div className="sectionHead"><div><h2>Minecraft tools & generators</h2><p>Core utilities are live now; advanced editors and databases are being expanded.</p></div></div><div className="toolGrid">{tools.map(t=><a className="toolCard" href={t[3]} key={t[1]}><div><span className="toolIcon">{t[0]}</span><span className="pill">Live</span></div><h3>{t[1]}</h3><p>{t[2]}</p><span className="go">Open tool →</span></a>)}</div></div></section>
<section className="section alt" id="about"><div className="wrap help"><h2>Useful first, SEO-ready from the start</h2><p>MineTools uses focused semantic URLs, crawlable tool pages, internal links and lightweight browser-based utilities. Each tool is being expanded with version-aware output, examples, FAQs and related tools rather than thin pages created only for search engines.</p></div></section>
</main>}