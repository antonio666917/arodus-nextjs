import styled from "styled-components";
import Link from "next/link";
import Layout from "../layouts/Main";
import PictureFrame from "../components/PictureFrame";
import Social from "../components/Social";

export default () => (
  <Layout>
    <h1>Hello!</h1>
    <p>
      I'm a <strong>web developer</strong> employed as the{" "}
      <strong>chief technologist</strong> at a digital marketing agency.
      Currently I work primarily with React and Node but over the years I have
      acquired proficiency in many technologies.
    </p>
    <p>
      Besides building my own companies, I've also produced things for many
      brands, Fortune 500 and small companies or individuals alike. Need a hand
      with an upcoming project? Learn a bit more{" "}
      <Link href="/about-me">
        <a>about me</a>
      </Link>{" "}
      and then consider{" "}
      <a href="mailto:hello@antoniorodriguez.us">working with me</a>.
    </p>
    <p>
      Thanks for visiting!<br />
      <strong>Antonio Rodríguez</strong>
    </p>

    <hr />
    <Social />
  </Layout>
);
