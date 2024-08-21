export const ContextoRecetas = React.createContext({
    recetas: JSON.parse(localStorage.getItem('recetas')),
    setRecetas: () => {}
  });