import Nav from "./nav.js"
import Hero from "./hero.js";
import Body from "./body.js"
import Footer from "./footer.js"

export default function Home() {
    return (
      <>
        <div>
          <Nav/>
        </div>
        <div>
          <Hero/>
        </div>
        <div>
          <Body/>
        </div>
        <div>
          <Footer/>
        </div>
      </>
    );
  }
  