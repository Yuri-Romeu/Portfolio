import type { Repo } from '../../Pages/Desktop';
import { Container, Header } from './styles';
import buttonClose from '../../assets/images/buttonClose.png';
import folder from '../../assets/images/folderOpen.png';

type Props = {
     isOpen: boolean;
     project: Repo;
     onClose: () => void;
};

const Modal = ({ isOpen, project, onClose }: Props) => {
     return (
          <Container isOpen={isOpen}>
               <Header>
                    <h1>
                         <img src={folder} alt="" /> {project.name}
                    </h1>
                    <button onClick={onClose}>
                         <img src={buttonClose} alt="" />
                    </button>
               </Header>
          </Container>
     );
};

export default Modal;
