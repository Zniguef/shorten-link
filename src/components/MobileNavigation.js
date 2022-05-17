import "../css/main.css";
import NavLinks from "./NavLinks";
import { useState } from "react";

function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <div onClick={() => setOpen(!open)} className="mobileNav">
      {open ? (
        <i class=" close fa-solid fa-circle-xmark"></i>
      ) : (
        <i class=" fa-solid fa-bars"></i>
      )}
      {open && <NavLinks />}
    </div>
  );
}

export default MobileNavigation;
