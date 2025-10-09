import styled from 'styled-components';
import notebook from '../../assets/images/notebook.png';

export const Container = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     height: 100vh;
     position: relative;
`;

export const ContainerNotebook = styled.div`
     position: relative;
     width: 900px;
     height: 600px;
     background-size: cover;
     background-image: url(${notebook});
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

export const ContainerPendrive = styled.div`
     position: absolute;
     right: 0;
     bottom: 170px;

     img {
          object-fit: cover;
          width: 200px;
     }
`;
