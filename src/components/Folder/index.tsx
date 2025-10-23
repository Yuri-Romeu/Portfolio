import folderImg from '../../assets/images/folder.png';
import { Container } from './styles';

type Props = {
     title: string;
     onClick?: () => void;
     img?: string;
};

const Folder = ({ title, onClick, img }: Props) => {
     return (
          <Container title={title} onClick={onClick}>
               <img src={img || folderImg} alt="" />
               <h1>{title}</h1>
          </Container>
     );
};

export default Folder;
