import React from 'react';
import styles from '../assets/css/Day.module.css';

function Day({ date, status, onClick, isSelected }) {
  // Formatear la fecha para mostrarla de manera más amigable
  const formatDate = (dateString) => {
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  // Determinar clases CSS dinámicamente
  const getDayClass = () => {
    let className = styles.day;
    
    // Agregar clase según el estado
    if (status === 'Disponible') {
      className += ` ${styles.dayAvailable}`;
    } else {
      className += ` ${styles.dayOccupied}`;
    }
    
    // Agregar clase si está seleccionado
    if (isSelected) {
      className += ` ${styles.daySelected}`;
    }
    
    return className;
  };

  return (
    <div 
      className={getDayClass()}
      onClick={onClick}
    >
      <div className={styles.dayDate}>{formatDate(date)}</div>
      <div className={styles.dayStatus}>{status}</div>
    </div>
  );
}

export default Day;