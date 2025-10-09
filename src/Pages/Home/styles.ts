import styled from 'styled-components';

type Props = {
     image: string;
};

export const Container = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     height: 100vh;
     position: relative;
`;

export const ContainerNotebook = styled.div<Props>`
     position: relative;
     width: 900px;
     height: 600px;
     background-size: cover;
     background-image: url(${({ image }) => image});
`;

export const ScreenFade = styled.div`
     position: absolute;
     inset: 0;
     background-color: black;
     opacity: 0;
     animation: fade 0.8s ease-in-out forwards;
     z-index: 50;

     @keyframes fade {
          0% {
               opacity: 0;
          }
          30% {
               opacity: 1;
          }

          100% {
               opacity: 0;
          }
     }
`;

export const PendriveArea = styled.div`
     position: absolute;
     transform: rotate(340deg);
     border-radius: 10px;
     bottom: 60px;
     right: 10%;
     width: 100px;
     height: 170px;
`;

export const TextNotebook = styled.div`
     position: absolute;
     top: 90px;
     color: #f5eaeaff;
     left: 25%;
     font-size: 14px;
     font-family: 'PerfectDOSVGA', monospace;
     font-weight: lighter;

     p {
          margin-bottom: 10px;
     }
`;

export const ContainerPendrive = styled.img`
     position: absolute;
     cursor: grab;
     right: 0;
     bottom: 170px;
     width: 200px;
`;
