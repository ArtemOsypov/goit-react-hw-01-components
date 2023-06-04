import styled from '@emotion/styled';

export const Friend = styled.li`
  padding: 10px;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;

  background-color: var(--bg);
  box-shadow: var(--main-shadow);
  border-radius: 10px;
`;

export const Online = styled.div`
  position: relative;

  width: 20px;
  height: 20px;

  background-color: var(--online);
  border-radius: 50%;
  box-shadow: var(--main-shadow);

  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    display: block;
    width: 20px;
    height: 20px;

    
  }
`;

export const Offline = styled.div`
  width: 20px;
  height: 20px;

  background-color: var(--offline);
  border-radius: 50%;
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: var(--secondary);
  text-shadow: var(--main-shadow);
`;
