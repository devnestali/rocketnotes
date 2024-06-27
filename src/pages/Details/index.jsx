import { Container } from "./styles";

import { Button } from "../../components/Button";

export function Details() {
  return (
    <Container>
      <h1>Hello Word! My name is Victor </h1>
      <span>Victor Nestali</span>

      <Button title="Login" loading />
      <Button title="Cadastrar"/>
      <Button title="Voltar"/>
    </Container>
  )
}