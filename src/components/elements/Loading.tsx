import * as React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const ModalFixedWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${props => props.color || 'rgba(255, 255, 255, 0.57)'};
  backdrop-filter: blur(2px);
`

const ModalContent = styled.div``

export const Loading = styled.div<{ color?: string; size?: string; stroke?: string }>`
  box-sizing: border-box;
  display: inline-block;
  margin: auto;
  width: ${props => props.size || '16px'};
  height: ${props => props.size || '16px'};
  border: ${props => props.stroke || '2px'} solid transparent;
  border-radius: 50%;
  border-top-color: ${props => props.color || 'currentColor'};
  border-right-color: ${props => props.color || 'currentColor'};
  animation: ${rotate} 1s linear infinite;
  flex: none;
`

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Overlay = ({ backdropColor, children }) => (
  <ModalFixedWrapper>
    <ModalBackdrop color={backdropColor}>
      <ModalContent>
        <Center>{children}</Center>
      </ModalContent>
    </ModalBackdrop>
  </ModalFixedWrapper>
)

export const LoadingOverlay = ({ backdropColor, spinnerColor }) => (
  <Overlay backdropColor={backdropColor}>
    <Loading color={spinnerColor} size="48px" />
  </Overlay>
)
