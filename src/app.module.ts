import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibrosController } from './libros/libros.controller';
import { LibrosService } from './libros/libros.service';
import {MongooseModule} from '@nestjs/mongoose';
import { LibroSchema } from './libros/schemas/libro.schema';

// Iniciar MongoDB Puerto
// Linea de comando ejecutar:
// mongod
// mongo

// forFeature([{name: 'Libro' // Sera la COLLECTION en NOSQL del Schema // Es decir una Tabla en SQL
@Module({ // IMPORTACIONES
  imports: [
    MongooseModule.forRoot('mongodb://localhost/crudNest'),
    MongooseModule.forFeature([{name: 'Libro', schema: LibroSchema}])
  ],
  controllers: [AppController, LibrosController],
  providers: [AppService, LibrosService],
})
export class AppModule {}
