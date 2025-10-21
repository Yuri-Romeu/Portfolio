import type { Repo } from '../../services/api';
import { Aside, Container, Content, Files, Header, Main, Menu, Select } from './styles';
import buttonClose from '../../assets/images/buttonClose.png';
import folder from '../../assets/images/folderOpen.png';

import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

import arrowGreen from '../../assets/images/arrow-green.png';
import {
     useGetRepoContentsQuery,
     useGetRepoInfoPromiseQuery,
     useGetLanguagesPromiseQuery,
     useGetCommitsPromiseQuery,
} from '../../services/api';

type Props = {
     isOpen: boolean;
     project: Repo;
     onClose: () => void;
     username: string;
};

const Modal = ({ isOpen, project, onClose, username }: Props) => {
     const {
          data: repos,
          error,
          isLoading,
     } = useGetRepoContentsQuery({
          username,
          project: project.name,
     });

     const { data: info } = useGetRepoInfoPromiseQuery({
          username,
          project: project.name,
     });

     const { data: langs } = useGetLanguagesPromiseQuery({
          username,
          project: project.name,
     });

     const { data: commits } = useGetCommitsPromiseQuery({
          username,
          project: project.name,
     });

     if (!info || !langs || !commits) return <p>carregando...</p>;

     const totalCommits = commits.reduce((acc, cur) => acc + cur.total, 0);
     const mainLanguage = Object.entries(langs).sort((a, b) => b[1] - a[1])[0][0];

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

               <Menu>
                    <div>
                         <ul>
                              <li>File</li>
                              <li>Edit</li>
                              <li>Search</li>
                              <li>Folders</li>
                              <li>Go</li>
                         </ul>
                    </div>

                    <div>
                         <Content>
                              <FaArrowAltCircleLeft color="#BCB297" size={20} cursor={'pointer'} />
                              <p>Back</p>
                              <FaArrowAltCircleRight color="#BCB297" size={20} cursor={'pointer'} />
                         </Content>

                         <Content>
                              <Select size={140}>
                                   <div>
                                        <img src={folder} alt="" /> Go
                                   </div>

                                   <div>
                                        <MdKeyboardArrowDown color="#1347BA" />
                                   </div>
                              </Select>
                         </Content>

                         <Content size={380}>
                              <img src={folder} width="20px" />
                         </Content>
                    </div>

                    <div className="thirdPart">
                         <p>Address</p>

                         <Select size={550}>
                              <div>
                                   <img src={folder} alt="" /> {project.name}
                              </div>

                              <div>
                                   <MdKeyboardArrowDown color="#1347BA" />
                              </div>
                         </Select>

                         <p>
                              <img src={arrowGreen} alt="" />
                              Go
                         </p>
                    </div>
               </Menu>

               <div className="content">
                    <Aside>
                         <h1>File and Folder Tasks</h1>
                         <hr />
                         {isLoading && <p>Carregando arquivos...</p>}
                         {error && <p>⚠️ Erro ao carregar o conteúdo do repositório.</p>}

                         {repos?.map(repo => (
                              <Files type={repo.type ?? 'file'}>
                                   <p key={repo.name}>{repo.name}</p>
                              </Files>
                         ))}
                    </Aside>

                    <Main>
                         <h1>{project.name}</h1>
                         <p>{project.description}</p>
                         <p>⭐ Stars: {info.stargazers_count}</p>
                         <p>🍴 Forks: {info.forks_count}</p>
                         <p>🐞 Issues abertas: {info.open_issues_count}</p>
                         <p>💬 Total de commits: {totalCommits}</p>
                         <p>💻 Linguagem principal: {mainLanguage}</p>
                    </Main>
               </div>
          </Container>
     );
};

export default Modal;
