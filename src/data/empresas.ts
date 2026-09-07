export type Empresa = {
  id: string;
  name: string;
  sector: string;
  city: string;
  website?: string;
  contact?: string;
};

/**
 * Directorio de empresas chilenas con presencia en México.
 * Reemplaza estos placeholders con el listado investigado.
 * No uses contactos reales aquí hasta tener la fuente confirmada.
 */
export const empresas: Empresa[] = [
  {
    id: "placeholder-1",
    name: "Empresa ejemplo A",
    sector: "Alimentos y bebidas",
    city: "Ciudad de México",
  },
  {
    id: "placeholder-2",
    name: "Empresa ejemplo B",
    sector: "Tecnología",
    city: "Guadalajara",
  },
  {
    id: "placeholder-3",
    name: "Empresa ejemplo C",
    sector: "Servicios",
    city: "Monterrey",
  },
];
