import { Container, Profile } from './styles'

export function Header() {
  return (
    <Container>
      
      <Profile>
        <img 
          src="https://github.com/devnestali.png" 
          alt="Foto do usuário"  
        />

        <div>
          <span>Bem-Vindo</span>
          <strong>Victor Nestali</strong>
        </div>
      </Profile>
    </Container>
  )
}