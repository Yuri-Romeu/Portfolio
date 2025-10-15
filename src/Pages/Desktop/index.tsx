import Folder from '../../components/Folder';
import Footer from '../../components/Footer';
import { Container } from './styles';

const Desktop = () => {
     return (
          <>
               <Container>
                    <Folder title="E-play" />
                    <Folder title="E-food" />
                    <Folder title="KanbanBoard" />
                    <Folder title="PasswordManager" />
                    <Folder title="Cypress" />
                    <Folder title="Contact Manager" />
                    <Folder title="ToDoList" />
                    <Folder title="Inovestt" />
                    <Folder title="App-Ride" />
                    <Folder title="DisneyPlus" />
               </Container>

               <Footer />
          </>
     );
};

export default Desktop;
