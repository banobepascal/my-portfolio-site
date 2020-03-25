import React from "react";

import { LoaderContainer, SpinnerContainer } from "./Spinner.styles";

const Loader = () => {
  return (
    <LoaderContainer className='loading'>
      <SpinnerContainer />
    </LoaderContainer>
  );
};

export default Loader;
