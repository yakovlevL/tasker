import * as React from 'react'
import styled from 'styled-components'

const config = {
  // in px
  paddingX: 16,
  paddingY: 20,

  layerBorderRadius: 4,
  layerWidth: 24,
  layerHeight: 2,
  layerSpacing: 5,
}

const yOffset = config.layerSpacing + config.layerHeight

const BurgerButton = styled.button`
  padding: ${config.paddingY}px ${config.paddingX}px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;

  &:hover {
    opacity: 0.7;
  }
  &.is-active:hover {
    opacity: 0.7;
  }
`

const BurgerBox = styled.div`
  position: relative;
  width: ${config.layerWidth}px;
  height: ${config.layerHeight * 3 + config.layerSpacing * 2}px;
  display: block;
`

const BurgerInner = styled.div<{ color?: string; activeColor?: string }>`
  display: block;
  top: 50%;
  margin-top: ${config.layerHeight / -2}px;

  &,
  &::before,
  &::after {
    width: ${config.layerWidth}px;
    height: ${config.layerHeight}px;
    background-color: ${props => props.color || '#000'};
    border-radius: ${config.layerBorderRadius}px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  &::before,
  &::after {
    content: '';
    display: block;
  }
  &::before {
    top: ${yOffset * -1}px;
  }
  &::after {
    bottom: ${yOffset * -1}px;
  }

  ${BurgerButton}.is-active &,
  ${BurgerButton}.is-active &::before,
  ${BurgerButton}.is-active &::after {
    background-color: ${props => props.activeColor || props.color || '#000'};
  }

  // Animation
  // ------------------------------

  & {
    top: ${config.layerHeight / 2}px;
    transition-duration: 0.275s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  &::before {
    top: ${yOffset}px;
    transition: opacity 0.125s 0.275s ease;
  }

  &::after {
    top: ${yOffset * 2}px;
    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  ${BurgerButton}.is-active & {
    transform: translate3d(0, ${yOffset}px, 0) rotate(135deg);
    transition-delay: 0.075s;
  }
  ${BurgerButton}.is-active &::before {
    transition-delay: 0s;
    opacity: 0;
  }
  ${BurgerButton}.is-active &::after {
    transform: translate3d(0, ${yOffset * -2}px, 0) rotate(-270deg);
    transition-delay: 0.075s;
  }
`

export const Burger = ({ open, color, activeColor, onClick }) => {
  return (
    <BurgerButton className={open ? 'is-active' : ''} onClick={onClick}>
      <BurgerBox>
        <BurgerInner color={color} activeColor={activeColor} />
      </BurgerBox>
    </BurgerButton>
  )
}
