import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateLibroDto } from './dto/crear-libro';
import { LibrosService } from './libros.service';

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
  todosLibros(): string{
    return this.libroService.buscarTodos();
  }

  @Get(':id')
  buscarUno(@Param('id')  idLibro: string): string{
    return this.libroService.buscarLibro(idLibro);
  }

  @Post()
  createLibro(@Body() libroDto: CreateLibroDto): string{
    return this.libroService.crearLibro(libroDto);
  }

  @Put(':id')
  modificarLibro(@Param('id') idLibro: string, @Body() libroDto: CreateLibroDto): string{
    return this.libroService.modificarLibro(idLibro, libroDto);
  }

  @Delete(':id')
  borrarLibro(@Param('id') idLibro: string): string{
    return this.libroService.borrarLibro(idLibro);
  }

}
