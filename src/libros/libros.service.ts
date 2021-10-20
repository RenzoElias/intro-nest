import { Injectable } from '@nestjs/common';
import { LibroI } from './interfaces/libro.interface';

@Injectable()
export class LibrosService {
  buscarTodos(){
    return 'Buscar todos los libros - Service'
  }

  buscarLibro(id: string){
    return 'Un solo libro - Service'
  }

  crearLibro(libro: LibroI) {
    return 'Crear Libro - Service'
  }

  modificarLibro(id: string, libro: LibroI){
    return 'Modificar Libro - Service'
  }

  borrarLibro(id: string){
    return 'Borrar Libro - Service'
  }
}
