import React from "react";
import Link from "gatsby-link";

import Project from "../Project";
import reactUniversalMarkdown from "../../images/react-universal-markdown.png";
import reactKeen from "../../images/react-keen.png";
import hackTheWeb from "../../images/hack-the-web.png";
import "./index.css";

const IndexPage = () => (
  <main className="IndexPage">
    <h2>Projects</h2>
    <section className="Projects">
      <Project
        title="Stylesheet"
        description="Dynamic CSS for user interfaces"
        image="https://camo.githubusercontent.com/15ab283599e3318fe60dd4944b109fea503e9d75/68747470733a2f2f63646e2e7261776769742e636f6d2f696464616e2f7374796c6573686565742f6d61737465722f6173736574732f7374796c6573686565742e737667"
        imageSize={0.6}
        link="https://github.com/iddan/stylesheet"
      />
      <Project
        title="react-native-canvas"
        description="A Canvas component for React Native"
        image="https://camo.githubusercontent.com/7a4367d9df9f5e7d7ae8545c241749563d677507/68747470733a2f2f656d6f6a6970656469612d75732e73332e616d617a6f6e6177732e636f6d2f7468756d62732f3234302f6170706c652f39362f66697265776f726b735f31663338362e706e67"
        imageSize={0.5}
        link="https://github.com/iddan/react-native-canvas"
      />
      <Project
        title="react-universal-markdown"
        description="Markdown component for Web and Native powered by CommonMark"
        image={reactUniversalMarkdown}
        link="https://github.com/iddan/react-native-canvas"
      />
      <Project
        title="react-keen"
        description="React bindings for Keen IO SDK"
        image={reactKeen}
        link="https://github.com/iddan/react-native-canvas"
        imageSize={1.1}
      />
      <Project
        title="progress-circle"
        description="Circular progress bar made with React, SVG and CSS Transitions."
        image="https://camo.githubusercontent.com/d086a2d92f35eb1a5437fcf84db4a636174daf35/687474703a2f2f692e67697068792e636f6d2f6c337132546d73563946754e7a7961624b2e676966"
        link="https://github.com/iddan/progress-circle"
      />
      <Project
        title="Hack the Web"
        description="A yearly event focusing on disrupting knowledge related to development for the World Wide Web."
        image={hackTheWeb}
        link="https://github.com/iddan/progress-circle"
        imageSize={1}
      />
    </section>
  </main>
);

export default IndexPage;
