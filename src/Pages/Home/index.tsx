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

const Home = () => {
     const [step, setStep] = useState(0);
     const [connected, setConnected] = useState(false);
     const [darkness, setDarkness] = useState(false);

     const lines = [
          'PhoenixBIOS v6.00PG, Copyright © 1985-2005 Phoenix Technologies.',
          'CPU: Intel(R) Core(TM) i7-6700HQ @ 2.60GHz',
          'Memory Test: 8192MB OK',
          'Detecting USB devices... none found',
          'No bootable device detected.',
     ];

     useEffect(() => {
          if (step < lines.length) {
               const timer = setTimeout(() => setStep(prev => prev + 1), 1800);
               return () => clearTimeout(timer);
          }
     }, [step]);

     const handleDragEnd = (result: DropResult) => {
          const { destination } = result;
          if (!destination) return;

          if (destination.droppableId === 'pendrive-area') {
               triggerFlash();
               setStep(5);
               setConnected(true);
          }
     };

     const triggerFlash = () => {
          setDarkness(true);
          setTimeout(() => setDarkness(false), 1300);
     };

     return (
          <DragDropContext onDragEnd={handleDragEnd}>
               <Container>
                    {darkness && <ScreenFade />}
                    <ContainerNotebook image={connected ? notebookPendrive : notebook}>
                         <TextNotebook>
                              {lines.slice(0, step).map((line, index) => (
                                   <p key={index}>{line}</p>
                              ))}

                              {step === lines.length && !connected && (
                                   <>
                                        <br />
                                        <Typewriter
                                             words={[
                                                  'Please insert USB drive and press F11 to continue...',
                                             ]}
                                             cursor
                                             cursorStyle="|"
                                             typeSpeed={50}
                                             deleteSpeed={0}
                                             delaySpeed={1000}
                                        />
                                   </>
                              )}

                              {connected && (
                                   <>
                                        <br />
                                        <p>Press F11 to continue...</p>
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
