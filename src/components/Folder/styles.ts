import styled from 'styled-components';

export const Container = styled.div`
     width: 60px;
     padding: 7px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     transition: background-color 0.2s;
     border-radius: 1px;
     cursor: default;
     margin: 4px;

     img {
          width: 40px;
          height: 40px;
          margin: 0 auto;
     }

     h1 {
          font-size: 13px;
          font-weight: normal;
          text-align: center;
          color: #eeececff;
          line-height: 1.2;
          font-family: 'SegoeUI';
          margin: 3px 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
     }

     &:hover {
          background-color: rgba(234, 238, 241, 0.2);
          border: 1px solid #ffffff88;
     }
`;
