import folderImg from '../../assets/images/folder.png';
import { Container } from './styles';

type Props = {
     title: string;
     onClick?: () => void;
};

const Folder = ({ title, onClick }: Props) => {
     return (
          <Container title={title} onClick={onClick}>
               <img src={folderImg} alt="" />
               <h1>{title}</h1>
          </Container>
     );
};

export default Folder;
