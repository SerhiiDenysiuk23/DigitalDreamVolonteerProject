import React, { useEffect, useRef, useState } from "react";
import style from "./BurgerMenu.module.scss";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div ref={menuRef} className={style.menu__container}>
      <div onClick={toggleMenu} className={style.menu}>
        <span className={isOpen ? style.hidden : ""}>Menu</span>
        <button>
          <img src="/assets/burger.svg" alt="burger" />
        </button>
      </div>
      {isOpen && (
        <nav className={`${style.nav} ${isOpen ? style.openMenu : ""}`}>
          <div className={style.burger}>
            <button onClick={toggleMenu}>
              <img src="/assets/burger.svg" alt="burger" />
            </button>
          </div>

          <ul>
            <li onClick={toggleMenu}>1</li>
            <li onClick={toggleMenu}>2</li>
            <li onClick={toggleMenu}>3</li>
            <li onClick={toggleMenu}>4</li>
            <li onClick={toggleMenu}>5</li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default BurgerMenu;
