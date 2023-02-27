import React from "react";
import ErrorMsg from "../components/errorMsg/ErrorMsg";
import Loading from "../components/loading/Loading";
import Search from "../components/search/Search";

const HomeView = () => {
  return (
    <div>
      HomeView
      <Search />
      <ErrorMsg>error message</ErrorMsg>
      <Loading />
    </div>
  );
};

export default HomeView;
