import React from "react";
import Header from "../../shared/components/Header";
import Layout from "../../shared/components/Layout";
import MovieCard from "../../shared/components/MovieCard";

function Home() {
  return (
    <>
      <Header />
      <Layout>
        <div className="flex flex-wrap gap-4">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </Layout>
    </>
  );
}

export default Home;
