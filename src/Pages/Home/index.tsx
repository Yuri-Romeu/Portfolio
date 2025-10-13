import pendrive from '../../assets/images/pendrive.png';
import notebook from '../../assets/images/notebook.png';
import notebookPendrive from '../../assets/images/pendrive-conectado.png';
import { Typewriter } from 'react-simple-typewriter';
import {
     Container,
     ContainerNotebook,
     ContainerPendrive,
     PendriveArea,
     ScreenFade,
     TextNotebook,
} from './styles';

import { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable, type DropResult } from '@hello-pangea/dnd';
import { useNavigate } from 'react-router-dom';

const Home = () => {
     const [step, setStep] = useState(0);
     const [connected, setConnected] = useState(false);
     const [darkness, setDarkness] = useState(false);
     const [finished, setFinished] = useState(false);
     const [bootStep, setBootStep] = useState(0); // novo contador para a sequência de sucesso

     const navigate = useNavigate();

     // textos iniciais (antes de conectar o pendrive)
     const lines = [
          'PhoenixBIOS v6.00PG, Copyright © 1985-2005 Phoenix Technologies.',
          'CPU: Intel(R) Core(TM) i7-6700HQ @ 2.60GHz',
          'Memory Test: 8192MB OK',
          'Detecting USB devices... none found',
          'No bootable device detected.',
     ];

     // textos após conectar e pressionar F11
     const linesSuccess = [
          'Initializing boot manager...',
          'Bootable USB device detected.',
          'Verifying USB integrity... OK',
          'Loading system files...',
          'Starting Inovestt Environment v1.0...',
          'Reading user configuration...',
          'Running startup checks... OK',
          'Boot complete.',
          'Welcome to Portfolio v1.0.0',
     ];

     // efeito para mostrar o texto BIOS inicial
     useEffect(() => {
          if (!connected && step < lines.length) {
               const timer = setTimeout(() => setStep(prev => prev + 1), 1500);
               return () => clearTimeout(timer);
          }
     }, [step, connected, lines.length]);

     // efeito para mostrar o texto de sucesso (depois do F11)
     useEffect(() => {
          if (finished && bootStep < linesSuccess.length) {
               const timer = setTimeout(() => setBootStep(prev => prev + 1), 1500);
               return () => clearTimeout(timer);
          }

          // quando terminar, vai pra página do "sistema"
          if (bootStep === linesSuccess.length) {
               setTimeout(() => navigate('/desktop'), 2000);
          }
     }, [bootStep, finished, linesSuccess.length, navigate]);

     // ao conectar o pendrive, escuta a tecla F11
     useEffect(() => {
          if (!connected) return;

          const handleKey = (event: KeyboardEvent) => {
               if (event.key === 'F11') {
                    triggerFlash();
                    setFinished(true);
               }
          };

          window.addEventListener('keydown', handleKey);
          return () => window.removeEventListener('keydown', handleKey);
     }, [connected]);

     // Pular texto com a barra de espaço
     useEffect(() => {
          if (connected) return; // desativa quando já conectou o pendrive

          const handleSpace = (event: KeyboardEvent) => {
               if ((event.key === ' ' || event.code === 'Space') && step < lines.length) {
                    setStep(prev => prev + 1);
               }
          };

          window.addEventListener('keydown', handleSpace);
          return () => window.removeEventListener('keydown', handleSpace);
     }, [connected, lines.length, step]);

     // Pular texto de sucesso com espaço
     useEffect(() => {
          if (!connected) return; // só ativa após conectar

          const handleSpace = (event: KeyboardEvent) => {
               if (
                    (event.key === ' ' || event.code === 'Space') &&
                    bootStep < linesSuccess.length
               ) {
                    setBootStep(prev => prev + 1);
               }
          };

          window.addEventListener('keydown', handleSpace);
          return () => window.removeEventListener('keydown', handleSpace);
     }, [connected, bootStep, linesSuccess.length]);

     // arrastar o pendrive até a área do notebook
     const handleDragEnd = (result: DropResult) => {
          const { destination } = result;
          if (!destination) return;

          if (destination.droppableId === 'pendrive-area') {
               triggerFlash();
               setConnected(true);
          }
     };

     const triggerFlash = (time: number = 1300) => {
          setDarkness(true);
          setTimeout(() => setDarkness(false), time);
     };

     return (
          <DragDropContext onDragEnd={handleDragEnd}>
               <Container>
                    {darkness && <ScreenFade />}

                    {/* Notebook desligado ou aguardando USB */}
                    {!finished ? (
                         <ContainerNotebook image={connected ? notebookPendrive : notebook}>
                              <TextNotebook situation="disconnected">
                                   {!connected
                                        ? lines
                                               .slice(0, step)
                                               .map((line, i) => <p key={i}>{line}</p>)
                                        : lines.map((line, i) => <p key={i}>{line}</p>)}

                                   {/* Quando termina o texto inicial */}
                                   {step === lines.length && !connected && (
                                        <>
                                             <br />
                                             <Typewriter
                                                  words={[
                                                       'Please insert a USB device and press F11 to continue...',
                                                  ]}
                                                  cursor
                                                  cursorStyle="|"
                                                  typeSpeed={50}
                                                  deleteSpeed={0}
                                                  delaySpeed={1000}
                                             />
                                        </>
                                   )}

                                   {connected && !finished && (
                                        <>
                                             <br />
                                             <p>USB device connected successfully.</p>
                                             <Typewriter
                                                  words={['Press F11 to boot from USB...']}
                                                  cursor
                                                  cursorStyle="|"
                                                  typeSpeed={60}
                                                  deleteSpeed={0}
                                                  delaySpeed={1000}
                                             />
                                        </>
                                   )}
                              </TextNotebook>

                              <Droppable droppableId="pendrive-area">
                                   {provided => (
                                        <PendriveArea
                                             ref={provided.innerRef}
                                             {...provided.droppableProps}
                                        ></PendriveArea>
                                   )}
                              </Droppable>
                         </ContainerNotebook>
                    ) : (
                         // Quando o sistema inicia (após F11)
                         <ContainerNotebook image={notebookPendrive}>
                              <TextNotebook situation="conected">
                                   {linesSuccess.slice(0, bootStep).map((line, i) => (
                                        <p key={i}>{line}</p>
                                   ))}
                              </TextNotebook>
                         </ContainerNotebook>
                    )}

                    {/* Pendrive fora do notebook */}
                    {!connected && (
                         <Droppable droppableId="outside" isDropDisabled>
                              {provided => (
                                   <div ref={provided.innerRef} {...provided.droppableProps}>
                                        <Draggable draggableId="pendrive" index={0}>
                                             {provided => (
                                                  <ContainerPendrive
                                                       ref={provided.innerRef}
                                                       {...provided.draggableProps}
                                                       {...provided.dragHandleProps}
                                                       src={pendrive}
                                                       alt="Pendrive"
                                                  />
                                             )}
                                        </Draggable>
                                   </div>
                              )}
                         </Droppable>
                    )}
               </Container>
          </DragDropContext>
     );
};

export default Home;
