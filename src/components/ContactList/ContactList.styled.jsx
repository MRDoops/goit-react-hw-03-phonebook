import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 0 20px;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Button = styled.button`
  padding: 5px 20px;
  color: #08085a;
  border: 1px solid #333340;
  border-radius: 5px;
`;
