import PropTypes from "prop-types";
import {
  ProfileCard,
  Discription,
  Image,
  Name,
  Tag,
  Location,
  StatsList,
  StatsItem,
  StatLabel,
  StatQuantity,
} from "./Profile.styled";

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileCard>
      <Discription>
        <Image src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Discription>

      <StatsList>
        <StatsItem>
          <StatLabel>Followers</StatLabel>
          <StatQuantity>{stats.followers}</StatQuantity>
        </StatsItem>
        <StatsItem>
          <StatLabel>Views</StatLabel>
          <StatQuantity>{stats.views}</StatQuantity>
        </StatsItem>
        <StatsItem>
          <StatLabel>Likes</StatLabel>
          <StatQuantity>{stats.likes}</StatQuantity>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
