import styled from 'styled-components';

export const Li = styled.li`
  display: grid;
  grid-template-columns: minmax(12.5rem, max-content) 4rem;
  justify-content: left;
  align-items: center;
  gap: 8px;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: red;
  font-size: 0.8rem;
  color: white;
`;
