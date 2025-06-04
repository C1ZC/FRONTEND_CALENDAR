import React from 'react';
import styles from '../assets/css/ControlPanel.module.css';

function ControlPanel({ selectedDay, onStatusChange }) {
  // Formatear la fecha para mostrarla de manera más amigable
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  // Determinar clases CSS dinámicamente
  const getStatusClass = () => {
    return `${styles.statusBadge} ${
      selectedDay.status === 'Disponible' ? styles.statusAvailable : styles.statusOccupied
    }`;
  };

  const getButtonClass = (type) => {
    const baseClass = `${styles.button}`;
    const typeClass = type === 'available' ? styles.buttonAvailable : styles.buttonOccupied;
    const disabledClass = 
      (type === 'available' && selectedDay.status === 'Disponible') || 
      (type === 'occupied' && selectedDay.status === 'Ocupado') 
        ? styles.buttonDisabled 
        : '';
    
    return `${baseClass} ${typeClass} ${disabledClass}`;
  };

  return (
    <div className={styles.panel}>
      <h2>Día seleccionado: {formatDate(selectedDay.date)}</h2>
      <p>Estado actual: <span className={getStatusClass()}>{selectedDay.status}</span></p>
      <div className={styles.buttonContainer}>
        <button 
          className={getButtonClass('available')}
          onClick={() => onStatusChange('Disponible')}
          disabled={selectedDay.status === 'Disponible'}
        >
          Marcar como Disponible
        </button>
        <button 
          className={getButtonClass('occupied')}
          onClick={() => onStatusChange('Ocupado')}
          disabled={selectedDay.status === 'Ocupado'}
        >
          Marcar como Ocupado
        </button>
      </div>
    </div>
  );
}

export default ControlPanel;