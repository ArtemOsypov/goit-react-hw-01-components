// { username, tag, location, avatar, stats: { followers, views, likes } }

import PropTypes from 'prop-types';
import { ProfileCard, Description, Avatar, Name, Tag, Location, Stats, StatsItem, Label, Quantity   } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {

  // console.log(username);
  // console.log(stats.followers);
  // console.log(card.stats.followers);
  return (
    <ProfileCard>
      <Description>
        <Avatar 
          src={avatar}
          alt={username}
        />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>S{location}</Location>
       
      </Description>
      <Stats>
        <StatsItem >
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem >
        <StatsItem >
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem >
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </ProfileCard>
    );
};
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
