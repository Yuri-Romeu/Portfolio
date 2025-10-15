import type { ProjectData } from '../../Pages/Desktop';
import { Container } from './styles';

type Props = {
     isOpen: boolean;
     project: ProjectData;
     onClose: () => void;
};

const Modal = ({ isOpen, project, onClose }: Props) => {
     return (
          <Container isOpen={isOpen}>
               <button onClick={onClose}>X</button>
               <h1>{project.title}</h1>
          </Container>
     );
};

export default Modal;
