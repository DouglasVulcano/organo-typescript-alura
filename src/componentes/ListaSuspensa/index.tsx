import "./ListaSuspensa.css";

interface IListaSuspensaProps {
  label: string;
  itens: string[];
  aoAlterado: (valor: string) => void;
  valor: string;
  obrigatorio?: boolean;
}

const ListaSuspensa = (props: IListaSuspensaProps) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.aoAlterado(evento.target.value)}
        required={props.obrigatorio}
        value={props.valor}
      >
        <option value=""></option>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
