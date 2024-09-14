import React from "react";
import getRecetas from "../functions/getRecetas";

export const ContextoRecetas = React.createContext({
    recetas: getRecetas(),
    setRecetas: () => {}
  });