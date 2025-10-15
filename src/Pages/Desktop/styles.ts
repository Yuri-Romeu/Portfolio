import styled from 'styled-components';
import background from '../../assets/images/desktopXP.webp';

export const Screen = styled.div`
     background-image: url(${background});
     background-size: cover;
     background-repeat: no-repeat;
     height: 100vh;
     max-width: 100%;
     display: flex;
     flex-direction: column;
     flex-wrap: wrap;
     align-content: flex-start;
     position: relative;
     padding: 20px;
     column-gap: 4px;
`;
