import styled from 'styled-components';

export const Container = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     width: 100%;
     height: 30px;
     padding: 15px;
     position: absolute;
     bottom: 0;
     background-color: #1347ba;
`;

export const StartArea = styled.div`
     background-color: transparent;
     position: relative;

     button {
          position: absolute;
          top: -13px;
          left: -12px;
          cursor: pointer;
          border: none;
          background-color: transparent;

          &:active {
               transform: scale(0.9);
          }
     }

     img {
          height: 25px;
          border-radius: 5px;
     }
`;

export const IconsArea = styled.div`
     display: flex;
     align-items: center;
     gap: 10px;
     cursor: pointer;
     height: 25px;
`;
