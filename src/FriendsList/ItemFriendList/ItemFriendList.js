import PropTypes from "prop-types";
import {
  FriendsItemList,
  SpanStatus,
  ImgAvatar,
  Name,
} from "./ItemFriendList.styled";

export default function ItemFriendList({ isOnline, avatar, name }) {
  return (
    <FriendsItemList>
      <SpanStatus isOnline={isOnline}></SpanStatus>
      <ImgAvatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendsItemList>
  );
}

ItemFriendList.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
