import React, { useState } from "react"
import Burger from "./Burger"
import { StyledMenu } from "./Mobile.styled"
import MenuLinks from "./MenuLinks"

function MobileMenu({ color, ...props }) {
  const [open, setOpen] = useState(false)
  const menuId = "main-menu"

  return (
    <div className="mobile-menu-container">
      <Burger
        open={open}
        setOpen={setOpen}
        aria-controls={menuId}
        color={color}
      />
      <StyledMenu open={open} aria-hidden={!open} {...props}>
        <div className="mobile-menu" tabIndex={open ? 0 : -1}>
          <MenuLinks />
        </div>
      </StyledMenu>
    </div>
  )
}

export default MobileMenu
