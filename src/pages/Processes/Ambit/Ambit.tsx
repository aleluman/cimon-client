import { Link } from "react-router-dom";
import { AmbitContainer, AmbitText } from "./styles";

type AmbitProps = {
  id: string;
  name: string;
};

export const Ambit = ({ id, name }: AmbitProps) => {
  return (
    <AmbitContainer>
      <AmbitText as={Link} to={`/ambits/${id}`}>
        {name}
      </AmbitText>
    </AmbitContainer>
  );
};
