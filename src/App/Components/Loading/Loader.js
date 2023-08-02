import React from 'react';
import styles from './Loader.module.css'; // Import CSS module

const ModalLoader = () => {
  return (
    <div className={styles.modalOverlay}> 
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div> 
      </div>
    </div>
  );
};

export default ModalLoader;
