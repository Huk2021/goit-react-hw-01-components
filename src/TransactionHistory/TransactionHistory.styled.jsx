import styled from "styled-components";

export const Table = styled.table`
  width: 800px;
  margin: 0px auto;
`;

export const Thead = styled.thead`
  background-color: #87cefa;
`;

export const TD = styled.td`
  width: calc(100% / 3);
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
`;

export const TBody = styled.tbody`
  background-color: #ffffff;
`;

export const TR = styled.tr`
  &:nth-of-type(2n) {
    background-color: #f0f0f0;
  }
`;

export const Items = styled.th`
  padding-top: 5px;
  padding-bottom: 5px;
  font-weight: 400;
  font-size: 18px;
`;
