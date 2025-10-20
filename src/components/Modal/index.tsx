import type { Repo } from '../../Pages/Desktop';
import { Container, Content, Header, Menu, Select } from './styles';
import buttonClose from '../../assets/images/buttonClose.png';
import folder from '../../assets/images/folderOpen.png';

import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

import arrowGreen from '../../assets/images/arrow-green.png';

type Props = {
     isOpen: boolean;
     project: Repo;
     onClose: () => void;
};

const Modal = ({ isOpen, project, onClose }: Props) => {
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
          </Container>
     );
};

export default Modal;
