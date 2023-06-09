import { IColaborador } from "../../shared/interfaces/IColaborador";
import Colaborador from "../Colaborador";

import "./Time.css";

interface ITimeProps {
  nome: string;
  corPrimaria: string;
  corSecundaria: string;
  colaboradores: IColaborador[];
}

const Time = (props: ITimeProps) => {
  const css = { backgroundColor: props.corSecundaria };

  return props.colaboradores.length > 0 ? (
    <section className="time" style={css}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            corDeFundo={props.corPrimaria}
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            date={colaborador.date}
          />
        ))}
      </div>
    </section>
  ) : (
    <></>
  );
};

export default Time;
