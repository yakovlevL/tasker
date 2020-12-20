import styled from 'styled-components'
import { borderRadius, spacing } from '../../../components/tokens'

export const StyledInput = styled.input`
  width: 100%;
  font-size: 14px;
  border-radius: ${borderRadius.default};
  padding: ${spacing.input};
  border: 1px solid ${props => props.theme.input.border};
  box-shadow: ${props => props.theme.shadow.subtle};

  background: ${props => props.theme.input.background};
  color: ${props => props.theme.input.color};

  .can-hover &:hover {
    border-color: ${props => props.theme.input.activeBorder};
  }

  &:focus {
    border-color: ${props => props.theme.input.activeBorder};
    background: ${props => props.theme.input.activeBackground};
    color: ${props => props.theme.input.activeColor};
  }
`

export const TextInput = StyledInput
export const DateInput = StyledInput
