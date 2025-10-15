import folderImg from '../../assets/images/folder.png';
import { Container } from './styles';

type Props = {
     title: string;
};

const Folder = ({ title }: Props) => {
     return (
          <Container>
               <img src={folderImg} alt="" />
               <h1>{title}</h1>
          </Container>
     );
};

export default Folder;
