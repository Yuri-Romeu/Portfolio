import pendrive from '../../assets/images/pendrive.png';
import { Typewriter } from 'react-simple-typewriter';
import { Container, ContainerNotebook, ContainerPendrive, TextNotebook } from './styles';
import { useEffect, useState } from 'react';

const Home = () => {
     const [step, setStep] = useState(0);
     const lines = [
          'PhoenixBIOS v6.00PG, Copyright © 1985-2005 Phoenix Technologies.',
          'CPU: Intel(R) Core(TM) i7-6700HQ @ 2.60GHz',
          'Memory Test: 8192MB OK',
          'Detecting USB devices... none found',
          'No bootable device detected.',
     ];

     useEffect(() => {
          if (step < lines.length) {
               const timer = setTimeout(() => setStep(step + 1), 1800);
               return () => clearTimeout(timer);
          }
     }, [step]);

     return (
          <Container>
               <ContainerNotebook>
                    <TextNotebook>
                         {lines.slice(0, step).map((line, index) => (
                              <p key={index}>{line}</p>
                         ))}

                         {step === lines.length && (
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
                    </TextNotebook>
               </ContainerNotebook>

               <ContainerPendrive>
                    <img src={pendrive} alt="" />
               </ContainerPendrive>
          </Container>
     );
};

export default Home;
