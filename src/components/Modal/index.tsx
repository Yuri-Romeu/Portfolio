import type { Repo } from '../../Pages/Desktop';
import { Aside, Container, Content, Files, Header, Menu, Select } from './styles';
import buttonClose from '../../assets/images/buttonClose.png';
import folder from '../../assets/images/folderOpen.png';

import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

import arrowGreen from '../../assets/images/arrow-green.png';
import { useEffect, useState } from 'react';

type Props = {
     isOpen: boolean;
     project: Repo;
     onClose: () => void;
     username: string;
};

const Modal = ({ isOpen, project, onClose, username }: Props) => {
     const [repos, setRepos] = useState<Repo[]>([]);
     const [error, setError] = useState<string | null>(null);

     useEffect(() => {
          const fetchRepos = async () => {
               try {
                    const res = await fetch(
                         `https://api.github.com/repos/${username}/${project.name}/contents/`,
                    );
                    if (!res.ok) {
                         throw new Error(
                              `Erro ao buscar repositórios: ${res.status} ${res.statusText}`,
                         );
                    }
                    const data: Repo[] = await res.json();
                    setRepos(data);
                    console.log('Repositórios carregados:', data);
               } catch (err: unknown) {
                    if (err instanceof Error) {
                         console.error(err);
                         setError(err.message);
                         console.log(error);
                    } else {
                         setError('Erro desconhecido ao buscar repositórios.');
                    }
               }
          };

          fetchRepos();
     }, [username]);

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

               <Aside>
                    <h1>File and Folder Tasks</h1>
                    <hr />

                    {repos.map(repo => (
                         <Files type={repo.type ?? 'file'}>
                              <p key={repo.name}>{repo.name}</p>
                         </Files>
                    ))}
               </Aside>
          </Container>
     );
};

export default Modal;
