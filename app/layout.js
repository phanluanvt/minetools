import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://minetools.io"),
  title: {
    default: "MineTools — Minecraft Tools & Generators",
    template: "%s | MineTools"
  },
  description: "Free Minecraft tools, command generators, calculators and editors for Java Edition.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "MineTools — Minecraft Tools & Generators",
    description: "Fast, free Minecraft generators and calculators.",
    url: "https://minetools.io",
    siteName: "MineTools",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="siteHeader">
          <div className="wrap headerInner">
            <a className="brand" href="/" aria-label="MineTools home">
              <span className="brandCube">M</span>
              <span>MineTools</span>
            </a>
            <nav className="topNav">
              <a href="/#tools">Tools</a>
              <a href="/#popular">Popular</a>
              <a href="/#about">About</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="wrap footerInner">
            <div><strong>MineTools</strong><br/><span>Independent Minecraft utility site.</span></div>
            <div className="footerLinks"><a href="/">Home</a><a href="/#tools">Tools</a></div>
          </div>
          <div className="wrap legal">Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.</div>
        </footer>
      </body>
    </html>
  );
}