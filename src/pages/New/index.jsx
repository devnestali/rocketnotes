import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import { Container, Form }  from './styles';

export function New() {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted));
  }
  
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />
          
          <Section title="Links úteis">
            {
              links.map((link, index) => {
                return <NoteItem
                          key={String(index)} 
                          value={link}
                          onClick={() => handleRemoveLink(link) }
                        />
              })
            }
            <NoteItem 
              isNew 
              placeholder="Novo Link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className='tags'>
              <NoteItem value="React"/>
              <NoteItem isNew placeholder="Nova Tag"/>
            </div>
          </Section>

          <Button title="Salvar"></Button>
        </Form>
      </main>

    </Container>
  )
}