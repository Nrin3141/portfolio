import React, { useState } from "react"
import Burger from "./Burger"
import MenuLinks from "./MenuLinks"
import "../../css/mobile-menu.css"

const MobileMenu = ({ color, display }) => {
  const [open, setOpen] = useState(false)
  const menuId = "main-menu"

  return (
    <div className={`mobile-menu-container ${display ? "" : "hide-mobile"}`}>
      <Burger
        open={open}
        setOpen={setOpen}
        aria-controls={menuId}
        color={color}
      />
      <div className={`mobile-menu ${!open ? "hidden" : ""}`}>
        <MenuLinks />
      </div>
    </div>
  )
}

export default MobileMenu
