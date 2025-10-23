import { Container, Header } from './styles';
import SearchWindows from '../../assets/images/search-windows.png';
import Close from '../../assets/images/buttonClose.png';

type Props = {
     isOpen: boolean;
     closeModal: () => void;
};

const ModalUser = ({ isOpen, closeModal }: Props) => {
     return (
          <Container isOpen={isOpen}>
               <Header>
                    <h1>
                         <img src={SearchWindows} alt="" /> About Me
                    </h1>
                    <button onClick={closeModal}>
                         <img src={Close} alt="" />
                    </button>
               </Header>
          </Container>
     );
};

export default ModalUser;
