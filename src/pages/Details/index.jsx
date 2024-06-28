import { Container, Links } from "./styles";

import { Header } from '../../components/Header';
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";

export function Details() {
  return (
    <Container>
      <Header />

      <Section title="Links uteis">
        <Links>
          <li>
            <a href="https://rocketseat.com.br" target="_blank">https://rocketseat.com.br/</a>
          </li>
          <li>
            <a href="https://www.alura.com.br/" target="_blank">https://alura.com.br/</a>
          </li>
        </Links>
      </Section>

      <Button title="Voltar"/>
    </Container>
  )
}