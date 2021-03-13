import React from "react";
import Head from "next/head";
import Section3 from "../components/Section3/Section3";
import { data } from "../assets/GlobalData";
import Section2 from "../components/Section2/Section2";
import Section1 from "../components/Section1/Section1";
import Header from "../components/Header/Header";
import Logo from "../assets/Logo";
import Section4 from "../components/Section4/Section4";
import Section5 from "../components/Section5/Section5";
import Footer from "../components/Footer/Footer";

const App = () => {
  return (
    <>
      <Head>
        <title>Archmove</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="http://fonts.cdnfonts.com/css/new-york-extra-large"
          rel="stylesheet"
        />
      </Head>
      <div className={"app"}>
        <Header
          menuItemsText={data.headerMenuItemsText}
          logoAsComponent={<Logo />}
        />
        <div className={"app_body"}>
          <Section1 {...data.dataForSection1} />
          <Section2 {...data.dataForSection2} />
          <Section3 {...data.dataForSection3} />
          <Section4 {...data.dataForSection4} />
          <Section5 {...data.dataForSection5} />
        </div>
        <Footer {...data.footerData} />
      </div>
    </>
  );
};

export default App;
