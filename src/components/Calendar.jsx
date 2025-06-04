import { useState, useEffect } from 'react';
import Day from './Day';
import ControlPanel from './ControlPanel';
import '../App.css';

function Calendar() {
  const [days, setDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar los datos iniciales desde el backend
  useEffect(() => {
    fetchCalendarData();
  }, []);

  // Función para obtener los datos del calendario desde el backend
  const fetchCalendarData = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8000/api/calendar');
      if (!response.ok) {
        throw new Error('Error al cargar los datos del calendario');
      }
      const data = await response.json();
      setDays(data.days);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching calendar data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Función para actualizar el estado de un día
  const updateDayStatus = async (date, newStatus) => {
    try {
      const response = await fetch('http://localhost:8000/api/calendar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date,
          status: newStatus,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el estado del día');
      }

      // Actualizar el estado local después de la respuesta exitosa
      setDays(days.map(day => 
        day.date === date ? { ...day, status: newStatus } : day
      ));
    } catch (err) {
      setError(err.message);
      console.error('Error updating day status:', err);
    }
  };

  // Función para seleccionar un día
  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="calendar-container">
      <h1>Calendario Semanal</h1>
      <div className="days-container">
        {days.map(day => (
          <Day 
            key={day.id}
            date={day.date}
            status={day.status}
            onClick={() => handleDayClick(day)}
            isSelected={selectedDay && selectedDay.date === day.date}
          />
        ))}
      </div>
      {selectedDay && (
        <ControlPanel 
          selectedDay={selectedDay}
          onStatusChange={(newStatus) => updateDayStatus(selectedDay.date, newStatus)}
        />
      )}
    </div>
  );
}

export default Calendar;