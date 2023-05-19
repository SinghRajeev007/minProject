import styles from "./header.module.css";
import Navbar from "../../atoms/navbar/navbar";
import { HiMenuAlt1 } from "react-icons/hi";
import NavMobile from "../../atoms/option-list/option-list";
import { useState } from "react";
//HiMenuAlt1

export default function Header() {
  const [isNavMobileVisible, setIsNavMobileVisible] = useState(false);
  function showList() {
    setIsNavMobileVisible(true);
  }
  function CloseList(){
    setIsNavMobileVisible(false)
  }
  if(isNavMobileVisible){
    return <NavMobile closeFunction = {CloseList}/>
  }
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="https://images.pexels.com/photos/1769735/pexels-photo-1769735.jpeg?auto=compress&cs=tinysrgb&w=600"
          height={70}
          width={150}
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className={styles.navWrapper}>
        <Navbar />
      </div>

      <div className={styles.iconWrapper}>
        <HiMenuAlt1 onClick={showList} />
      </div>
     
    </header>
  );
}
