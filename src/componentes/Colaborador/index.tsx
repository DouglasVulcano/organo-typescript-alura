import "./Colaborador.css";

interface IColaboradorProps {
  nome: string;
  imagem: string;
  cargo: string;
  corDeFundo: string;
  date: string;
}

const Colaborador = ({
  nome,
  imagem,
  cargo,
  corDeFundo,
  date,
}: IColaboradorProps) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <h5>{new Date(date).toDateString()}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
