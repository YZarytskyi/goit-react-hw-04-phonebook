import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  padding-left: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

export const Label = styled.label`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 8px;
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 4px 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 1px 1px blue;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 8px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: blue;
  color: white;
`;
