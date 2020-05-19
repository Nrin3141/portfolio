import styled from "styled-components"

export const StyledBurger = styled.button`
  :focus {
    outline: 0;
  }
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1000;
  span {
    width: 20px;
    height: 1px;
    background: ${({ open, color }) => {
      return open ? "black" : color
    }};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
