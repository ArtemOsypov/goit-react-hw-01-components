import PropTypes from 'prop-types';
import { Container } from './FreindsList.styled';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendsList = ({ friends }) => {
  return (
    <Container>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />;
      })}
    </Container>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};