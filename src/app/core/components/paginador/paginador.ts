/**
 * Interfaz para manejar las propiedades del paginador.
 */
export class Paginador {
  page: number;
  size: number;
  sort: string;
  totalElements: number;
  pageSizeOptions: number[];
}
