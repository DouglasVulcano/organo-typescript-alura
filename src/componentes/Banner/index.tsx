import "./Banner.css";

import React from "react";

interface IBannerProps {
  enderecoImg: string;
  textoAlternativo?: string;
}

const Banner = (props: IBannerProps) => {
  return (
    <header className="banner">
      <img src={props.enderecoImg} alt={props.textoAlternativo} />
    </header>
  );
};

export default Banner;
