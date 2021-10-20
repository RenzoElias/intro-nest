import { Injectable } from '@nestjs/common';
import { LibroI } from './interfaces/libro.interface';
import {Model} from 'mongoose'
import {InjectModel} from '@nestjs/mongoose'

@Injectable()
export class LibrosService {

  constructor(@InjectModel('Libro') private readonly libroModel: Model<LibroI>) {}

  // Devuelve una Promesa - De Tipo Objeto LibroI - este caso es array []
  async buscarTodos(): Promise<LibroI[]> {
    return await this.libroModel.find();
  }

  async buscarLibro(id: string): Promise<LibroI>{
    return await this.libroModel.findOne({_id: id});
  }

  async crearLibro(libro: LibroI): Promise<LibroI> {
    // console.log('Services');
    // console.log(libro);
    const nuevoLibro = new this.libroModel(libro);
    return await nuevoLibro.save();
  }

  async modificarLibro(id: string, libro: LibroI): Promise<LibroI>{
    return await this.libroModel.findByIdAndUpdate(id, libro, {new: true})
  }

  async borrarLibro(id: string): Promise<LibroI>{
    return await this.libroModel.findByIdAndRemove(id);
  }
}
