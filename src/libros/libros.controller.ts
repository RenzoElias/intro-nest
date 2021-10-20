import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateLibroDto } from './dto/crear-libro';
import { LibrosService } from './libros.service';
import { LibroI } from './interfaces/libro.interface';

@Controller('libros')
export class LibrosController {
  // Controller -> Services -> Implement -> Repository
  // @Post() // Crear - C
  // @Get()  // Obtener - R
  // @Put()  // Modificar - U
  // @Delete() // Eliminar -  D

  // Injectar nuestro SERVICE
  constructor(private readonly libroService: LibrosService){}

  @Get()
  todosLibros(): Promise<LibroI[]>{
    return this.libroService.buscarTodos();
  }

  @Get(':id')
  buscarUno(@Param('id')  idLibro: string): Promise<LibroI>{
    return this.libroService.buscarLibro(idLibro);
  }

  @Post()
  createLibro(@Body() libroDto: CreateLibroDto): Promise<LibroI>{
    // console.log('Controller');
    // console.log(libroDto);
    return this.libroService.crearLibro(libroDto);
  }

  @Put(':id')
  modificarLibro(@Param('id') idLibro: string, @Body() libroDto: CreateLibroDto): Promise<LibroI>{
    return this.libroService.modificarLibro(idLibro, libroDto);
  }

  @Delete(':id')
  borrarLibro(@Param('id') idLibro: string): Promise<LibroI>{
    return this.libroService.borrarLibro(idLibro);
  }

}
