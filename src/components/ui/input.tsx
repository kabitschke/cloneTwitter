"use client"

import { faEye, faEyeSlash, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


type Props = {
  placeholder: string;
  password?: boolean;
  icon?: IconDefinition;
  filled?: boolean;
  value?: string;
  onChange?: (newValue: string) => void;
}

export const Input = ({ placeholder, password, icon, filled, value, onChange }: Props) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`has-[:focus]:border-white flex items-center h-14 rounded-3xl border-2 border-gray-700 ${filled && 'bg-gray-700'}`}>
      {/*filled preenchimento da borda */}
      {
        icon &&
        <FontAwesomeIcon
          icon={icon}
          className="ml-4 size-6 text-gray-500"
        />
      }

      <input
        type={password && !showPassword ? 'password' : 'text'}//verifica se password esta true ou false, e ShowPassword true ou false altera para mostrar senha ou ocultar, muda o campo de password para text e vice versa.
        className="flex-1 outline-none bg-transparent h-full px-4"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange && onChange(e.target.value)}
      />

      {
        password &&
        <FontAwesomeIcon
          onClick={() => setShowPassword(!showPassword)}
          //Olhinho do campo senha mostra ele aberto ou fechado dependendo de Showpassword que sempre que for clicado inverte o resultado.
          icon={showPassword ? faEye : faEyeSlash}
          className="cursor-pointer mr-4 size-6 text-gray-500"
        />
      }
    </div>
  );
}