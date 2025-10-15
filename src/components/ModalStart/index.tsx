import { Container } from './styles';
import { useEffect, useState } from 'react';

export interface Perfil {
     login: string;
     avatar_url: string;
     followers: string;
     following: string;
     bio: string;
     location: string;
     publick_repos: string;
     name: string;
}

type Props = {
     isVisible: boolean;
};
const ModalStart = ({ isVisible }: Props) => {
     const username = 'yuri-romeu';
     const [perfil, setPerfil] = useState<Perfil | null>(null);
     const [error, setError] = useState<string | null>(null);

     useEffect(() => {
          const fetchRepos = async () => {
               try {
                    const res = await fetch(`https://api.github.com/users/${username}`);
                    if (!res.ok) {
                         throw new Error(
                              `Erro ao buscar repositórios: ${res.status} ${res.statusText}`,
                         );
                    }
                    const data: Perfil = await res.json();
                    setPerfil(data);
                    console.log('Repositórios carregados:', data);
               } catch (err: unknown) {
                    if (err instanceof Error) {
                         console.error(err);
                         setError(err.message);
                    } else {
                         setError('Erro desconhecido ao buscar repositórios.');
                    }
               }
          };

          fetchRepos();
     }, [username]);

     return (
          <Container isVisible={isVisible}>
               {error && <p>{error}</p>}
               <img src="" alt="" />
               <h1>{perfil?.login}</h1>
          </Container>
     );
};

export default ModalStart;
