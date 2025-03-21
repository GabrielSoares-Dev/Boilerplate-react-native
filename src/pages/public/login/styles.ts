import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 20px 20px;
  gap: 20px;
`

export const Title = styled.Text`
  font-size: 35px;
  color: #000;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
`
export const ButtonContainer = styled.View``
