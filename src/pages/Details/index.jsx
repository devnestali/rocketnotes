import { Container, Links, Content } from "./styles";

import { Tag } from "../../components/Tag";
import { Header } from '../../components/Header';
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao ReactJS
          </h1>

          <p>
          Mergulhe no universo do ReactJS e domine a arte de construir interfaces web dinâmicas e escaláveis! Com essa biblioteca JavaScript inovadora, você cria interfaces modulares através de componentes reutilizáveis, simplificando o desenvolvimento e a manutenção de seus projetos. Explore os conceitos básicos, aprenda a estruturar seus componentes e torne-se um especialista em interfaces interativas.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="https://rocketseat.com.br" target="_blank">https://rocketseat.com.br/</a>
              </li>
              <li>
                <a href="https://www.alura.com.br/" target="_blank">https://alura.com.br/</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}