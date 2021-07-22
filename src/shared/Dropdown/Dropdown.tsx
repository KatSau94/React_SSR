import React from 'react';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const noop = () => {};

export function Dropdown({button, children, isOpen=false, onOpen = noop, onClose = noop}: IDropdownProps) {
  const [isDropDowOpen, setIsDpordownOpen] = React.useState(isOpen);
  
  React.useEffect(() => setIsDpordownOpen(isOpen), [isOpen]);
  React.useEffect(() => isDropDowOpen ? onOpen() : onClose(), [isDropDowOpen])


  const handleOpen = () => {
    if(isOpen !== undefined){
      setIsDpordownOpen(!isDropDowOpen)
    }
  }

  
  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>
        {button}
      </div>
      {isDropDowOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={()=> setIsDpordownOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
