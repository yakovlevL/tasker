import * as React from 'react'
import { rgba } from 'polished'
import styled from 'styled-components'

import { borderRadius } from '../tokens'

interface CustomButtonProps {
  href?: string
  kind?: 'primary' | 'secondary' | 'ghost'
  color?: 'default' | 'warn'
  size?: 'default' | 'small' | 'icon'
  disabled?: boolean
  width?: string | 'full'
  centerContent?: boolean // true by default

  onClick?: (e: any) => void
}

type ButtonProps = any & CustomButtonProps

const borderWidth = 3

export const StyledButtonGroup = styled.div`
  border-radius: ${borderRadius.default};
  display: flex;
  align-items: center;
`

export const StyledButton = styled.button.attrs<ButtonProps>(
  ({ href, as = 'button', color, disabled, width, type }) => {
    return {
      as: href && !disabled ? 'a' : as,
      type: type || 'button',
      className: [disabled ? 'is-disabled' : '', `is-color--${color || 'default'}`].join(' '),
      style: { width: width === 'full' ? '100%' : width },
    }
  }
)<ButtonProps>`
  ${({ theme, kind }) => {
    switch (kind) {
      case 'secondary':
        return `
          border: ${borderWidth}px solid ${theme.interactive.border};
          background: transparent;
          color: ${theme.interactive.text};
          font-size: 16px;

          .can-hover & {
            transition: all 0.15s ease-out;
          }

          .can-hover &:hover {
            border: ${borderWidth}px solid ${theme.interactive.bg};
            background: ${theme.interactive.bg};
            color: ${theme.interactive.fg};
            opacity: 0.8;
          }


          &.is-color--warn {
            border-color: ${theme.warn.default};
            color: ${theme.warn.default};

            .can-hover &:hover {
              border-color: ${theme.warn.default};
              background: ${theme.warn.default};
              color: ${theme.warn.fg};
            }
          }


          &:focus {
            box-shadow: inset 0 0 0 1px #fff;
          }
        `

      case 'ghost':
        return `
          border: ${borderWidth}px solid transparent;
          background: transparent;
          color: inherit;
          font-size: 18px;

          &.is-color--warn {
            color: ${theme.warn.default};
            background-color: ${theme.warn.bg};
          }
        `

      default:
        return `
          border: ${borderWidth}px solid ${theme.interactive.bg};
          background: ${theme.interactive.bg};
          color: ${theme.interactive.fg};
          font-size: 18px;

          .can-hover & {
            transition: opacity 0.15s ease-out;
          }

          .can-hover &:hover {
            opacity: 0.8;
          }

          &.is-color--warn {
            border-color: ${theme.warn.default};
            background: ${theme.warn.default};
            color: ${theme.warn.fg};
          }

          &:focus {
            box-shadow: inset 0 0 0 1px #fff;
          }
        `
    }
  }}

  ${props => {
    switch (props.size) {
      case 'icon':
        return `
          padding: ${4 - borderWidth}px ${4 - borderWidth}px;
          border-radius: ${borderRadius.circle} !important;
          min-height: 32px;
          min-width: 32px;
        `
      case 'small':
        return `
          padding: ${4 - borderWidth}px ${16 - borderWidth}px;
          min-height: 32px;
        `
      default:
        return `
          padding: ${8 - borderWidth}px ${14 - borderWidth}px;
          min-height: 56px;
        `
    }
  }}

  line-height: 24px;

  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: top;
  outline: 0;
  margin: 0;

  ${props => {
    if (props.centerContent === false) {
      return `justify-content: space-between;`
    }
  }}

  border-radius: ${borderRadius.default};
  font-weight: bold;
  cursor: pointer;

  ${StyledButtonGroup} & {
    border-radius: 0;
  }
  ${StyledButtonGroup} & + & {
    margin-left: 1px;
  }
  ${StyledButtonGroup} & + &:before {
    content: '';
    width: 1px;
    background: ${props => rgba(props.theme.interactive.border, 0.8)};
    position: absolute;
    top: ${-borderWidth}px;
    left: ${-borderWidth - 1}px;
    bottom: ${-borderWidth}px;
  }
  .can-hover ${StyledButtonGroup} &:hover + &:before {
    opacity: 0.8;
  }
  ${StyledButtonGroup} &:first-child {
    border-radius: ${borderRadius.default} 0 0 ${borderRadius.default};
  }
  ${StyledButtonGroup} &:last-child {
    border-radius: 0 ${borderRadius.default} ${borderRadius.default} 0;
  }

  &:disabled,
  &.is-disabled,
  &:focus:disabled,
  &:hover:disabled,
  &:focus.is-disabled,
  &:hover.is-disabled {
    cursor: not-allowed;
    opacity: 0.4;
    ${({ theme, kind }) => {
      switch (kind) {
        case 'secondary':
          return `
            border: ${borderWidth}px solid ${theme.warn.default};
            background: transparent;
            color: ${theme.warn.default};
          `
        default:
          return `
            color: ${rgba(theme.interactive.fg, 0.5)};
          `
      }
    }}
  }
`
export const Button = StyledButton // : FunctionComponent = () => {}
export const ButtonGroup = StyledButtonGroup
