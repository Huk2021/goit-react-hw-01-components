import styled from "styled-components";

export const ProfileCard = styled.div`
  margin: 0 auto;
  width: 300px;
  background-color: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 3px 1px rgba(61, 38, 38, 0.1);
`;

export const Discription = styled.div`
  padding: 25px 0;
`;

export const Image = styled.img`
  display: block;
  width: 100px;
  margin: 0 auto;
  border-radius: 50px;
  border: 1px solid #080808;
`;

export const Name = styled.p`
  margin-top: 15px;
  margin-bottom: 0;
  font-weight: 600;
  font-size: 32px;
  text-align: center;
  color: #080808;
`;

export const Tag = styled.p`
  margin-top: 15px;
  margin-bottom: 0;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: #909090;
`;

export const Location = styled.p`
  margin-top: 15px;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  color: #909090;
`;
export const StatsList = styled.ul`
  display: flex;
  padding: 0;
  background-color: #f0f8ff;
  border: 1px solid #909090;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px 20px;
  &:not(:last-child) {
    border-right: 1px solid #909090;
  }
`;

export const StatLabel = styled.span`
  margin: 0 auto;
  padding-bottom: 5px;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.25;
  color: #909090;
`;

export const StatQuantity = styled.span`
  margin: 0 auto;
  font-weight: 700;
  font-size: 15px;
`;
