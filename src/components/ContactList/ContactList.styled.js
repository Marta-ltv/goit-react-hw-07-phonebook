import styled from 'styled-components';

export const ContactsList = styled.ul`
font-size: 30px;
font-weight: 400;
`;

export const ContactListItem = styled.li`
padding: 5px;
font-size: 30px;
font-weight: 400;
display:flex;
align-items:center;

`;

export const ButtonDelete = styled.button`
align-items:center;
font-size: 20px;
font-weight: 400;
margin-left:10px;
border-radius:10px;
`;


export const ContactsItem = styled.li`
  padding: 0 10px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

// export const ContactName = styled.p`
//   margin-right: auto;
// `;

// export const ContactNumber = styled.p`
//   margin-right: 30px;
// `;

export const DeleteButton = styled.button`
  height: 26px;
  padding: 5px 10px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  background-color: #eee;
  color: #ff6c00;
  cursor: pointer;
  transition: background-color 300ms linear, color 300ms linear;
  &:hover {
    background-color: #ff6c00;
    color: #eee;
  }
`;
