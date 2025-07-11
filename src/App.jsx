import React from "react";
import styles from "./style";
import {
  Navbar,
  Hero,
  Business,
  Billing,
  CTA,
  ClientSection,
  Stats,
  CardDeal,
  Testimonial,
  Footer,
} from "./components/";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary  ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonial />
          <ClientSection />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
