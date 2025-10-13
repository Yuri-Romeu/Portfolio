import { Container, IconsArea, StartArea } from './styles';
import { IoIosArrowUp } from 'react-icons/io';
import { RiWifiLine } from 'react-icons/ri';
import { IoBatteryFull } from 'react-icons/io5';
import { IoVolumeHighOutline } from 'react-icons/io5';
import { PiNotification } from 'react-icons/pi';
import startWindows from '../../assets/images/startWindowsXp.png';
import { useEffect, useState } from 'react';

const Footer = () => {
     const [horario, setHorario] = useState('00:00');

     useEffect(() => {
          const interval = setInterval(() => {
               const horario = new Date().toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
               });
               setHorario(horario);
          }, 1000);
          return () => clearInterval(interval);
     }, []);

     return (
          <Container>
               <StartArea>
                    <button>
                         <img src={startWindows} alt="" />
                    </button>
               </StartArea>

               <IconsArea>
                    <IoIosArrowUp />
                    <IoBatteryFull />
                    <RiWifiLine />
                    <IoVolumeHighOutline />
                    <span>POR</span>
                    <span>{horario}</span>
                    <PiNotification />
               </IconsArea>
          </Container>
     );
};

export default Footer;
