import PropTypes from "prop-types";
import { FriendsList } from "./FriendsList.styled";
import ItemFriendList from "./ItemFriendList/ItemFriendList";

export default function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <ItemFriendList
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </FriendsList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
