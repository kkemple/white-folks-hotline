import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome!</h1>
    <p>
      The White Folks Hotline was inspired by{" "}
      <a href="https://twitter.com/TatianaTMac/status/1267527942843838469?s=20">
        Tatiana Mac’s Twitter thread
      </a>{" "}
      about how we need more white dudes (or folks) to take part in educating
      other white folk about issues of race, racism, gender, orientation, or
      ethics in tech. While the goal is to educate white folks, we welcome Black
      folks and folks of color to join us, and participate as little or as much
      as you would like to. We would definitely be honored to have you!
    </p>

    <p>
      White Folks Hotline is NOT resources created by white people, but instead
      an aggregation of content, art, and learning materials created by Black
      folk. Our goal is to equip white folk with the tools and resources needed
      to educate themselves about these topics, and provide a community to
      foster growth and create a safe space for dialog.
    </p>

    <hr />

    <h2>Learn</h2>
    <h3>Books</h3>
    <h3>Articles</h3>
    <h3>Podcasts</h3>
    <h3>Videos</h3>
    <h3>Training</h3>

    <hr />

    <h2>Get Involved</h2>

    <hr />

    <h2>Community</h2>
  </Layout>
)

export default IndexPage
