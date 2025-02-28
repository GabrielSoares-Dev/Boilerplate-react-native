import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
`

export const Input = styled.TextInput<{ hasError?: boolean }>`
  height: 40px;
  border-width: 1px;
  border-color: ${({ hasError }) => (hasError ? 'red' : '#007bff')};
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  color: #000;
  background-color: #fff;
  elevation: 5;
  width: 100%;
`
