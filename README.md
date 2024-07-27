# Pokedex App - React + Vite

## Descripción

Pokedex es una aplicación web construida con React que permite a los usuarios explorar la lista de Pokémon disponibles, ver detalles sobre cada uno y agregar sus favoritos. Los datos se obtienen de la PokeAPI y la aplicación incluye funcionalidades de búsqueda y almacenamiento persistente de favoritos utilizando Local Storage. Se utiliza la Context API de React para gestionar el estado global de la aplicación.

## Características

- Navega a través de una lista de Pokémon.
- Ve detalles de cada Pokémon, incluyendo sus estadísticas y habilidades.
- Agrega Pokémon a tus favoritos.
- Busca Pokémon por nombre con validación de entrada.
- Persistencia de favoritos utilizando Local Storage.
- Gestión de estado global utilizando la Context API de React.

## Tecnologías Utilizadas

- React
- React Router
- PokeAPI
- Local Storage
- CSS

## Instalación

### 1. Clonar el repositorio

Abre tu terminal y ejecuta el siguiente comando:
```bash
git clone https://github.com/tu-usuario/challenge-pokedex-react.git

```
### 2. Clonar el repositorio

Accede al directorio del proyecto que acabas de clonar:
```bash
cd challenge-pokedex-react
```

### 3. Instalar las dependencias

Asegúrate de tener Node.js y npm instalados. Luego, ejecuta el siguiente comando para instalar todas las dependencias necesarias:
```bash
npm install
```

### 4. Iniciar la aplicación

Una vez que se hayan instalado todas las dependencias, puedes iniciar la aplicación ejecutando:

```bash
npm run dev
```

### Uso

1. Navegación: Al abrir la aplicación, podrás ver una lista de Pokémon. Puedes hacer clic en cualquier Pokémon para ver más detalles sobre él.
2. Búsqueda: Utiliza el campo de búsqueda para encontrar Pokémon por nombre. Ten en cuenta que la búsqueda requiere al menos 3 caracteres y no permite caracteres especiales.
3. Agregar a Favoritos: Para agregar un Pokémon a tus favoritos, haz clic en el botón correspondiente en la página de detalles del Pokémon.
4. Ver Favoritos: Puedes acceder a tus Pokémon favoritos desde la sección "Favoritos" en la aplicación.
