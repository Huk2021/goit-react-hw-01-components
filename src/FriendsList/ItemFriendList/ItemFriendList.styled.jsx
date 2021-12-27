import styled from "styled-components";

export const FriendsItemList = styled.li`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 15px;
  background-color: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 3px 1px rgba(61, 38, 38, 0.1);
`;

export const SpanStatus = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    return isOnline ? "green" : "red";
  }};
`;

export const ImgAvatar = styled.img`
  margin-left: 10px;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 18px;
`;
