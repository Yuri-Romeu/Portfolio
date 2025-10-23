import { useState } from 'react';
import Folder from '../../components/Folder';
import Footer from '../../components/Footer';
import { Screen } from './styles';
import Modal from '../../components/Modal';
import ModalStart from '../../components/ModalStart';
import userWindows from '../../assets/images/user-windows.png';
import { useGetUserReposQuery, type Repo } from '../../services/api';
import ModalUser from '../../components/ModalUser';

const Desktop = () => {
     const [openModal, setOpenModal] = useState(false);
     const [openModalUser, setOpenModalUser] = useState(false);
     const [selectedProject, setSelectedProject] = useState<Repo | null>(null);
     const [modalStart, setModalStart] = useState(false);
     const username = 'yuri-romeu';

     const { data: repos, error, isLoading } = useGetUserReposQuery(username);

     const handleOpenModal = (project: Repo) => {
          setSelectedProject(project);
          setOpenModal(true);
          setOpenModalUser(false);
     };

     const handleCloseModal = () => {
          if (!openModal) return;

          setOpenModal(false);
          setSelectedProject(null);
     };

     const handleOpenModalUser = () => {
          setOpenModalUser(true);
          setOpenModal(false);
     };

     const handleCloseModalUser = () => {
          if (!openModalUser) return;

          setOpenModalUser(false);
          setSelectedProject(null);
     };

     return (
          <div>
               <Screen onClick={handleCloseModal}>
                    {isLoading && <p>Carregando repositórios...</p>}
                    {error && <p>⚠️ Erro ao buscar repositórios.</p>}
                    {repos?.map(project => (
                         <Folder
                              key={project.id}
                              title={project.name}
                              onClick={() => handleOpenModal(project)}
                         />
                    ))}

                    {!isLoading && (
                         <Folder title="User" img={userWindows} onClick={handleOpenModalUser} />
                    )}
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
               <ModalUser isOpen={openModalUser} closeModal={handleCloseModalUser} />
          </div>
     );
};

export default Desktop;
