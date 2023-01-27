import styled from 'styled-components';

export const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.primaryColorTwo};
  background: none;
  cursor: pointer;
  padding: 10px 40px;
  &:hover {
    background-color: ${({ theme }) => theme.primaryColorTwo};
    color: #fff;
  }
`;
