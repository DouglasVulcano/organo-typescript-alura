import { ReactElement } from "react";
import "./Botao.css";

interface IBotaoProps {
  children: ReactElement | string;
}

const Botao = (props: IBotaoProps) => {
  return <button className="botao">{props.children}</button>;
};

export default Botao;
