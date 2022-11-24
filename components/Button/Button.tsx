import { Button as CButton } from "@chakra-ui/react";

type ButtonProp = {
  children: string;
};

function Button({ children }: ButtonProp) {
  return <CButton> {children}</CButton>;
}

export default Button;
