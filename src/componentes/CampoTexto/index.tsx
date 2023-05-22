import "./CampoTexto.css";

interface ICampoTextoProps {
  aoAlterado: (valor: string) => void;
  placeholder: string;
  label: string;
  valor: string;
  obrigatorio?: boolean;
  type?: "text" | "date" | "number" | "email" | "password";
}

const CampoTexto = ({
  aoAlterado,
  placeholder,
  label,
  valor,
  obrigatorio = false,
  type = "text",
}: ICampoTextoProps) => {
  const placeholderModificada = `${placeholder}...`;

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default CampoTexto;
