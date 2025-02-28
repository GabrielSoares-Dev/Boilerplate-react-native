import styled from 'styled-components/native'

export const ErrorText = styled.Text`
  font-size: 14px;
  color: red;
  margin-top: 5px;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.semiBold};
`
