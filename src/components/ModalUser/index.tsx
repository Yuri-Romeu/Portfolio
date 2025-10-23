import { ButtonXp, Container, Header, Main } from './styles';
import folderUser from '../../assets/images/folder-user.png';
import Close from '../../assets/images/buttonClose.png';
import { useGetUserQuery } from '../../services/api';
import { CgMail } from 'react-icons/cg';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';

type Props = {
     isOpen: boolean;
     username: string;
     closeModal: () => void;
};

const ModalUser = ({ isOpen, closeModal, username }: Props) => {
     const { data: user } = useGetUserQuery(username);

     return (
          <Container isOpen={isOpen}>
               <Header>
                    <h1>
                         <img src={folderUser} alt="" /> About Me
                    </h1>
                    <button onClick={closeModal}>
                         <img src={Close} alt="" />
                    </button>
               </Header>

               <Main>
                    <img src={user?.avatar_url} />
                    <h1>
                         Nome: <span>Yuri de Castro Romeu</span>
                    </h1>

                    <h1>
                         Idade: <span>18</span>
                    </h1>

                    <h1>
                         Área de atuação: <span>Front-End Developer</span>
                    </h1>

                    <h1>
                         Habilidades:{' '}
                         <span>
                              HTML, CSS, JavaScript, React, Typescript, Node.js, Git & GitHub, Sass
                         </span>
                    </h1>

                    <h1 style={{ float: 'left', marginTop: '4px' }}>
                         Habilidades Pessoas:{' '}
                         <span>
                              Comunicativo, Criativo, Empenhado, Proativo, Trabalho em equipe
                         </span>
                    </h1>

                    <h1>
                         Sobre mim:{' '}
                         <span>
                              Sou um desenvolvedor apaixonado por criar coisas novas. Desde que
                              comecei a estudar programação, descobri que criar algo do zero e ver
                              tudo funcionando é uma das coisas que mais me motiva. Gosto de
                              aprender coisas novas todos os dias e estou sempre buscando evoluir
                              tanto profissionalmente quanto pessoalmente. Meu maior sonho é poder
                              trabalhar com o que amo, ter liberdade para conhecer o mundo e viver
                              experiências que me inspirem a continuar crescendo. Acredito muito que
                              disciplina, fé e propósito andam juntos, e que cada passo dado com
                              dedicação nos aproxima dos nossos sonhos.
                         </span>
                    </h1>

                    <h1>
                         Contatos:{' '}
                         <span>
                              <a href="mailto:yuriromeu2007@gmail.com" target="_blank">
                                   <CgMail color="#1347ba" size={16} />
                                   Gmail
                              </a>
                         </span>
                         <span>
                              <a href="https://www.linkedin.com/in/yuriromeu/" target="_blank">
                                   <FaLinkedinIn color="#1347ba" size={16} />
                                   LinkedIn
                              </a>
                         </span>
                         <span>
                              <a href="https://github.com/Yuri-Romeu" target="_blank">
                                   <FaGithub color="#1347ba" size={16} />
                                   GitHub
                              </a>
                         </span>
                    </h1>
                    <hr />
                    <ButtonXp onClick={closeModal}>OK</ButtonXp>
               </Main>
          </Container>
     );
};

export default ModalUser;
