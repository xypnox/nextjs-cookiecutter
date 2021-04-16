import Head from "next/head";
import styled from "styled-components";
import Layout from "../components/Layout";
import { name, tagline } from "../constants";

const Hero = styled.div`
  h1 {
    font-size: 3rem;
  }
  img {
    width: 100%;
  }
`;

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{name}</title>
      </Head>
      <Hero>
        <div className="content">
          <h1>{name}</h1>
          <p>{tagline}</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            iste facere officiis veniam laboriosam nam, consequatur harum quos
            incidunt fugit? Optio necessitatibus neque, et perferendis nemo ex
            molestias blanditiis dolor.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            temporibus dolores dolorem molestias voluptatum enim vel tempore
            recusandae ducimus, accusamus, voluptas praesentium beatae, officiis
            quibusdam sed. Unde libero pariatur ipsa.
          </p>

          <img src="https://source.unsplash.com/1600x900/?cookie" alt="" />
        </div>
      </Hero>
    </Layout>
  );
}
