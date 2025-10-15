import { useState } from 'react';
import Folder from '../../components/Folder';
import Footer from '../../components/Footer';
import { Screen } from './styles';
import Modal from '../../components/Modal';

export interface ProjectData {
     id: number;
     title: string;
}

const Desktop = () => {
     const [openModal, setOpenModal] = useState(false);
     const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

     const projects: ProjectData[] = [
          { id: 1, title: 'E-play' },
          { id: 2, title: 'E-food' },
          { id: 3, title: 'KanbanBoard' },
          { id: 4, title: 'PasswordManager' },
          { id: 5, title: 'Cypress' },
          { id: 6, title: 'Contact Manager' },
          { id: 7, title: 'ToDoList' },
          { id: 8, title: 'Inovestt' },
          { id: 9, title: 'App-Ride' },
          { id: 10, title: 'DisneyPlus' },
     ];

     const handleOpenModal = (project: ProjectData) => {
          setSelectedProject(project);
          setOpenModal(true);
     };

     return (
          <>
               <Screen>
                    {projects.map(project => (
                         <Folder
                              key={project.id}
                              title={project.title}
                              onClick={() => handleOpenModal(project)}
                         />
                    ))}
               </Screen>

               <Footer />

               <Modal
                    project={selectedProject || { id: 0, title: '' }}
                    isOpen={openModal}
                    onClose={() => setOpenModal(false)}
               />
          </>
     );
};

export default Desktop;
