import styled from 'styled-components';

export const ChartContainer = styled.div`
     padding: 4px;
     width: 100%;
     max-width: 400px;
     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const ChartTitle = styled.h3`
     font-size: 16px;
     font-weight: bold;
     color: #2c3e50;
     margin-bottom: 2px;
     text-align: left;
`;

export const ChartWrapper = styled.div`
     width: 100%;
     height: 80px;
`;

export const StatusText = styled.p<{ error?: boolean }>`
     font-size: 14px;
     color: ${props => (props.error ? '#c0392b' : '#777')};
     text-align: center;
`;
