# 📅 Calendario Semanal - Frontend

Una aplicación web moderna para gestionar y visualizar el estado de citas de la semana actual. Permite marcar días como "Disponible" u "Ocupado" con una interfaz intuitiva y responsive.

## 🚀 Características

- ✅ **Visualización semanal**: Muestra los 7 días de la semana actual
- 🎨 **Indicadores visuales**: Colores semáforo (verde/rojo) para estados
- 📱 **Diseño responsive**: Adaptable a dispositivos móviles y escritorio
- ⚡ **Actualizaciones en tiempo real**: Sincronización con backend FastAPI
- 🎯 **Interfaz intuitiva**: Selección y edición fácil de estados
- 🔄 **Estados de carga**: Feedback visual durante operaciones

## 🛠️ Tecnologías

- **React 19.1.0** - Biblioteca de interfaz de usuario
- **Vite 6.3.5** - Herramienta de construcción y desarrollo
- **CSS Modules** - Estilos modulares y encapsulados
- **ESLint** - Linter para calidad de código
- **Fetch API** - Comunicación con backend

## 📋 Prerequisitos

- Node.js (versión 16 o superior)
- npm o yarn
- Backend FastAPI ejecutándose en `http://localhost:8000`

## Video Instalación

Puedes ver la instalación en video del proyecto aquí:  
[![Ver video en YouTube](https://img.youtube.com/vi/PrNL07mUXNQ/0.jpg)](https://youtu.be/PrNL07mUXNQ)


## 🔧 Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/C1ZC/FRONTEND_CALENDAR.git
cd FRONTEND_CALENDAR
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Construcción
npm run build        # Construye para producción

# Linting
npm run lint         # Ejecuta ESLint

# Vista previa
npm run preview      # Vista previa de build de producción
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/           # Componentes React
│   ├── Calendar.jsx     # Componente principal
│   ├── Day.jsx          # Componente de día individual
│   └── ControlPanel.jsx # Panel de control de estados
├── assets/
│   └── css/             # Estilos CSS Modules
│       ├── Day.module.css
│       └── ControlPanel.module.css
├── App.jsx              # Componente raíz
├── App.css             # Estilos globales
├── index.css           # Estilos base
└── main.jsx            # Punto de entrada
```

## 🎯 Componentes Principales

### Calendar.jsx
- **Propósito**: Componente principal que gestiona el estado global
- **Hooks**: useState (days, selectedDay, loading, error), useEffect
- **Funciones**: fetchCalendarData(), updateDayStatus(), handleDayClick()

### Day.jsx
- **Propósito**: Representa un día individual del calendario
- **Props**: date, status, onClick, isSelected
- **Características**: Formateo de fecha, estilos dinámicos

### ControlPanel.jsx
- **Propósito**: Panel para cambiar el estado del día seleccionado
- **Props**: selectedDay, onStatusChange
- **Funciones**: Botones para marcar como Disponible/Ocupado

## 🌐 Integración con Backend

### Endpoints utilizados:

**GET `/api/calendar`**
- Obtiene los días de la semana con sus estados
- Respuesta esperada:
```json
{
  "days": [
    { "id": 1, "date": "2023-06-12", "status": "Disponible" },
    { "id": 2, "date": "2023-06-13", "status": "Ocupado" }
  ]
}
```

**POST `/api/calendar`**
- Actualiza el estado de un día específico
- Body esperado:
```json
{
  "date": "2023-06-12",
  "status": "Ocupado"
}
```

## 🎨 Estilos y Diseño

### Paleta de Colores
- **Disponible**: `#4caf50` (Verde)
- **Ocupado**: `#f44336` (Rojo)
- **Fondo**: `#ffffff` (Blanco)
- **Texto**: `#213547` (Gris oscuro)

### Responsive Design
- **Desktop**: 7 columnas (una por día)
- **Tablet** (≤768px): 3 columnas
- **Mobile** (≤480px): 2 columnas

## ⚡ Funcionalidades

1. **Carga inicial**: Al montar el componente, obtiene datos del backend
2. **Selección de día**: Click en cualquier día para seleccionarlo
3. **Cambio de estado**: Botones en panel de control para actualizar estado
4. **Feedback visual**: Indicadores de carga y manejo de errores
5. **Sincronización**: Actualización local tras confirmación del servidor

## 🔍 Manejo de Estados

### Loading States
```jsx
if (loading) return <div>Cargando...</div>;
if (error) return <div>Error: {error}</div>;
```

### Estado Local
- `days`: Array de días con sus estados
- `selectedDay`: Día actualmente seleccionado
- `loading`: Estado de carga
- `error`: Mensajes de error

## 🚨 Manejo de Errores

- **Errores de red**: Capturados y mostrados al usuario
- **Errores del servidor**: Manejados con mensajes descriptivos
- **Estados de carga**: Feedback visual durante operaciones asíncronas

### ESLint
El proyecto incluye configuración de ESLint con:
- Reglas recomendadas de JavaScript
- Plugin para React Hooks
- Plugin para React Refresh
- Variables no utilizadas con patrón de excepción

### Vite
Configuración optimizada para:
- Hot Module Replacement (HMR)
- Fast Refresh para React
- Build optimizado para producción

## 📄 Licencia

Este proyecto es parte de una prueba técnica.

## 👥 Autor

Desarrollado como parte de una prueba técnica para demostrar habilidades en React y desarrollo frontend moderno.

---

**¿Necesitas ayuda?** Revisa la documentación de [React](https://react.dev/) y [Vite](https://vite.dev/) para más información.
