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
import { useEffect, useState } from 'react';
import LanguagesGraphic from '../LanguagesGraphic';

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

     const {
          data: commits,
          isFetching: isFetchingCommits,
          refetch: refetchCommits,
     } = useGetCommitsPromiseQuery(
          { username, project: project.name },
          { refetchOnMountOrArgChange: true },
     );

     const [retryCount, setRetryCount] = useState(0);

     useEffect(() => {
          if (Array.isArray(commits) && commits.length > 0) {
               setRetryCount(0);
               return;
          }

          if (Array.isArray(commits) && commits.length === 0 && retryCount < 10) {
               const id = setInterval(() => {
                    refetchCommits();
                    setRetryCount(prev => prev + 1);
               }, 5000);

               return () => clearInterval(id);
          }
     }, [commits, refetchCommits, retryCount]);

     const totalCommits =
          Array.isArray(commits) && commits.length > 0
               ? commits.reduce((acc, cur) => acc + (cur.total || 0), 0)
               : null;

     if (!info || !langs || !commits) {
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
                    <Main>
                         <p>Carregando dados do repositório...</p>
                    </Main>
               </Container>
          );
     }

     const langsEntries = Object.entries(langs as unknown as Record<string, number>);
     const mainLanguage =
          langsEntries.length > 0 ? langsEntries.sort((a, b) => b[1] - a[1])[0][0] : 'Desconhecida';

     const dateLastCommit = new Date(info.pushed_at).toLocaleDateString('pt-BR');

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

                         <a href={project.html_url} target="_blank">
                              <img src={arrowGreen} alt="" />
                              Go
                         </a>
                    </div>
               </Menu>

               <div className="content">
                    <Aside>
                         <h1>File and Folder Tasks</h1>
                         <hr />
                         {isLoading && <p>Carregando...</p>}
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

                         <div className="infosMain">
                              <span>
                                   {isFetchingCommits && !totalCommits
                                        ? 'Calculando commits...'
                                        : totalCommits ?? '—'}{' '}
                                   commits
                              </span>
                              <span>{mainLanguage}</span>
                              <span>{info.forks_count} contributors</span>
                              <span>{info.stargazers_count} stars</span>
                         </div>
                         <hr />

                         <LanguagesGraphic project={project} username={username} />

                         <span>Ultimo commit: {dateLastCommit}</span>
                         <span>Tamanho: {info.size} bytes</span>
                         <span>Criador: {username}</span>
                         <a href={info.html_url} target="_blank">
                              Ir para GitHub
                         </a>
                    </Main>
               </div>
          </Container>
     );
};

export default Modal;
