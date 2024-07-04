import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';

export function Header() {
  return (
    <Container>
      
      <Profile to="/profile">
        <img 
          src="https://github.com/devnestali.png" 
          alt="Foto do usuário"  
        />

        <div>
          <span>Bem-Vindo</span>
          <strong>Victor Nestali</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>

    </Container>
  )
}