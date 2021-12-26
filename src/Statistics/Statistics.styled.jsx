import styled from "@emotion/styled";

export const StatisticsSection = styled.section`
  width: 300px;
  margin: 20px auto;
  background-color: #ffffff;
  padding-top: 20px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 3px 1px rgba(61, 38, 38, 0.1);
`;

export const Title = styled.h2`
  padding-bottom: 20px;
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: #080808;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: #ffffff;
  width: 40px;
  background-color: ${() =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`};
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 10px;
  color: #ffffff;
`;

export const Percentage = styled.span`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;
