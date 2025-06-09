import { useNavigate } from "react-router";

import { Button, State } from "@shared/components";

export const LayoutNotFound = () => {
  const navigate = useNavigate();
  return (
    <State.Root className="w-full h-1/2 flex items-center justify-center mt-10">
      <State.Title>Ops! página não encontrada</State.Title>
      <State.Text>Essa página não foi possível ser encontrada</State.Text>

      <Button
        type="button"
        onClick={() => navigate(-1)}
        className="bg-blue-500 mt-6"
      >
        Voltar a tela anterior
      </Button>
    </State.Root>
  );
};
