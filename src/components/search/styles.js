import styled, { css } from "styled-components"

export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`

const list = css`
  position: absolute;
  right: -20px;
  overflow-x: hidden;
  z-index: 40;
  top: calc(100% + 0.5em);
  width: calc(4em + 40vw);
  max-width: 30em;
  box-shadow: 0 0 5px 0;
  background: ${props => props.theme.white};
  border-radius: ${props => props.theme.smallBorderRadius};

  > * + * {
    padding-top: 1em !important;
    border-top: 2px solid ${props => props.theme.darkGray};
  }
  li + li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid ${props => props.theme.lightGray};
  }
`

const grid = css`
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
    grid-gap: 1em;

    li {
      background: ${props => props.theme.veryLightGray};
      border-radius: ${props => props.theme.smallBorderRadius};
    }
  }
`

export const HitsWrapper = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};
  max-height: 80vh;
  background: white;
  scrollbar-color: ${theme.palette.secondary.main} #fff;
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-track-piece {
    background: white;
  }
  &::-webkit-scrollbar-thumb:vertical {
    background: rgb(51, 51, 51);
  }
  ${props => (props.hitsAsGrid ? grid : list)};
  * {
    margin: 0;
    margin-bottom: 10px;
    padding: 0;
  }
  ul {
    list-style: none;
    padding-left: 20px;
    padding-right: 15px;
  }
  mark {
    background: ${theme.palette.secondary.main};
  }
  p {
    padding-left: 20px;
    padding-right: 20px;
  }
  header {
    padding: 7px 10px 7px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.3em;
    background: ${theme.palette.primary.main};
    h3 {
      margin: 0;
      color: ${props => props.theme.white};
      background: ${props => props.theme.gray};
    }
  }
`
