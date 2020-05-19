import React, { useState } from "react"
import Burger from "./Burger"
import MenuLinks from "./MenuLinks"
import "../../css/mobile-menu.css"

function MobileMenu({ color }) {
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
      <div
        className={`mobile-menu ${!open ? "hidden-menu" : ""}`}
        tabIndex={open ? 0 : -1}
      >
        <MenuLinks />
      </div>
    </div>
  )
}

export default MobileMenu
