import React from "react";
import { ReactComponent as Spinner } from "../../assets/images/spinner.svg";

const Loading = () => {
  return (
    <div className="spinner">
      <Spinner />
    </div>
  );
};

export default Loading;
