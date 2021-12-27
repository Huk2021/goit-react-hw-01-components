import PropTypes from "prop-types";
import { FriendsList } from "./FriendsList.styled";
import ItemFriendList from "./ItemFriendList/ItemFriendList";

export default function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li>
          <ItemFriendList isOnline={isOnline} avatar={avatar} name={name} />
        </li>
      ))}
    </FriendsList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
