import { Container, Footer, Header, Main } from './styles';
import { useEffect, useState } from 'react';
import internetExplorer from '../../assets/images/internet-explorer.png';
import email from '../../assets/images/email.png';
import msn from '../../assets/images/msn.png';
import windowsMensager from '../../assets/images/messager.png';
import wordpad from '../../assets/images/wordpad.png';
import mediaPlayer from '../../assets/images/media-player2.png';
import windowsTour from '../../assets/images/windowsTour.png';
import fileSettings from '../../assets/images/filesSettings.png';

import myDocuments from '../../assets/images/myDocuments.png';
import myRecentDocuments from '../../assets/images/recentDocument.png';
import myPictures from '../../assets/images/documentsPictures.png';
import myComputer from '../../assets/images/myComputer.png';
import controlPane from '../../assets/images/controlPane.png';
import help from '../../assets/images/helpSupport.png';
import connectTo from '../../assets/images/connectTo.png';
import printers from '../../assets/images/print.png';
import search from '../../assets/images/search_icon.png';

import logOff from '../../assets/images/logOff.png';
import turnOff from '../../assets/images/turnOff.png';

import BoxMenu from '../BoxMenu';
import { Link } from 'react-router';

export interface Perfil {
     login: string;
     avatar_url: string;
     followers: string;
     following: string;
     bio: string;
     location: string;
     publick_repos: string;
     name: string;
}

type Props = {
     isVisible: boolean;
};
const ModalStart = ({ isVisible }: Props) => {
     const username = 'yuri-romeu';
     const [perfil, setPerfil] = useState<Perfil | null>(null);
     const [error, setError] = useState<string | null>(null);

     useEffect(() => {
          const fetchRepos = async () => {
               try {
                    const res = await fetch(`https://api.github.com/users/${username}`);
                    if (!res.ok) {
                         throw new Error(
                              `Erro ao buscar repositórios: ${res.status} ${res.statusText}`,
                         );
                    }
                    const data: Perfil = await res.json();
                    setPerfil(data);
                    console.log('Repositórios carregados:', data);
               } catch (err: unknown) {
                    if (err instanceof Error) {
                         console.error(err);
                         setError(err.message);
                    } else {
                         setError('Erro desconhecido ao buscar repositórios.');
                    }
               }
          };

          fetchRepos();
     }, [username]);

     return (
          <Container isVisible={isVisible}>
               <Header>
                    {error && <p>{error}</p>}
                    <img src={perfil?.avatar_url} alt="" />
                    <h1>{perfil?.login}</h1>
               </Header>

               <Main>
                    <div className="white">
                         <BoxMenu
                              side="left"
                              img={internetExplorer}
                              title="Internet"
                              subTitle="Internet Explorer"
                         />

                         <BoxMenu
                              side="left"
                              img={email}
                              title="Email"
                              subTitle="Outlook Express"
                         />
                         <hr />

                         <BoxMenu side="left" img={msn} title="MSN" />

                         <BoxMenu side="left" img={mediaPlayer} title="Windows Media Player" />

                         <BoxMenu side="left" img={windowsMensager} title="Windows Messenger" />

                         <BoxMenu side="left" img={wordpad} title="WordPad" />

                         <BoxMenu side="left" img={windowsTour} title="Windows Tour" />

                         <BoxMenu
                              side="left"
                              img={fileSettings}
                              title="Files and Settings Transfer Wizard"
                         />

                         <p>More Programs</p>
                    </div>
                    <div className="blue">
                         <BoxMenu side="right" img={myDocuments} title="My Documents" />
                         <BoxMenu
                              side="right"
                              img={myRecentDocuments}
                              title="My Recent Documents"
                         />
                         <BoxMenu side="right" img={myPictures} title="My Pictures" />
                         <BoxMenu side="right" img={myComputer} title="My Computer" />

                         <hr />

                         <BoxMenu
                              side="right"
                              img={controlPane}
                              title="Control Panel"
                              weight={500}
                         />

                         <BoxMenu
                              side="right"
                              img={printers}
                              title="Printers and Faxes"
                              weight={500}
                         />

                         <BoxMenu side="right" img={connectTo} title="Connect to" weight={500} />

                         <hr />

                         <BoxMenu side="right" img={help} title="Help and Support" weight={500} />
                         <BoxMenu side="right" img={search} title="Search" weight={500} size={23} />
                    </div>
               </Main>

               <Footer>
                    <button>
                         <img src={logOff} />
                         <p>Log out</p>
                    </button>

                    <Link to="/">
                         <button>
                              <img src={turnOff} alt="" />
                              <p>Turn off</p>
                         </button>
                    </Link>
               </Footer>
          </Container>
     );
};

export default ModalStart;
