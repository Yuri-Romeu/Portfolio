import { useEffect, useState } from 'react';
import Folder from '../../components/Folder';
import Footer from '../../components/Footer';
import { Screen } from './styles';
import Modal from '../../components/Modal';
import ModalStart from '../../components/ModalStart';

// Tipagem básica para os repositórios do GitHub
export interface Repo {
     id: number;
     name: string;
     html_url: string;
     description: string | null;
     type?: string;
}

const Desktop = () => {
     const [openModal, setOpenModal] = useState(false);
     const [selectedProject, setSelectedProject] = useState<Repo | null>(null);
     const [repos, setRepos] = useState<Repo[]>([]);
     const [error, setError] = useState<string | null>(null);
     const [modalStart, setModalStart] = useState(false);
     const username = 'yuri-romeu';

     useEffect(() => {
          const fetchRepos = async () => {
               try {
                    const res = await fetch(`https://api.github.com/users/${username}/repos`);
                    if (!res.ok) {
                         throw new Error(
                              `Erro ao buscar repositórios: ${res.status} ${res.statusText}`,
                         );
                    }
                    const data: Repo[] = await res.json();
                    setRepos(data);
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

     const handleOpenModal = (project: Repo) => {
          setSelectedProject(project);
          setOpenModal(true);
     };

     const handleCloseModal = () => {
          if (!openModal) return;

          setOpenModal(false);
          setSelectedProject(null);
     };

     return (
          <div>
               <Screen onClick={handleCloseModal}>
                    {error && <p>⚠️ {error}</p>}
                    {repos.map(project => (
                         <Folder
                              key={project.id}
                              title={project.name}
                              onClick={() => handleOpenModal(project)}
                         />
                    ))}
               </Screen>

               <Footer onClickModalStart={() => setModalStart(!modalStart)} />

               {selectedProject && (
                    <Modal
                         project={selectedProject}
                         isOpen={openModal}
                         onClose={handleCloseModal}
                         username={username}
                    />
               )}

               <ModalStart isVisible={modalStart} />
          </div>
     );
};

export default Desktop;
