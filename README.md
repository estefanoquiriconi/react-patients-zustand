# Proyecto de Gestión de Pacientes Veterinarios

Este proyecto es una aplicación web construida con React, TypeScript y Vite, diseñada para gestionar el seguimiento de pacientes en una clínica veterinaria. Permite agregar, editar y eliminar información de pacientes, así como visualizar sus detalles.

## Requisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/)

## Instalación

1. Clona el repositorio:

```bash
  git clone https://github.com/estefanoquiriconi/react-patients-zustand
  cd react-patients-zustand
```

2. Instala las dependencias:

```bash
npm install
```

## Ejecución

Para iniciar la aplicación en modo de desarrollo, ejecuta:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne).

## Compilación para producción

Para compilar la aplicación para producción:

```bash
npm run build
```

Los archivos compilados se generarán en el directorio `dist/`.

## Características principales

- Registro de nuevos pacientes con información detallada
- Edición de información de pacientes existentes
- Eliminación de registros de pacientes
- Interfaz de usuario intuitiva y responsive
- Almacenamiento local de datos mediante localStorage

## Estructura del proyecto

```
/src
  /components      # Componentes reutilizables
  /hooks           # Custom hooks
  /types           # Definiciones de tipos TypeScript
  /utils           # Funciones de utilidad
  App.tsx          # Componente principal
  main.tsx         # Punto de entrada
```

## Tecnologías utilizadas

- React 18
- TypeScript
- Vite
- Tailwind CSS
