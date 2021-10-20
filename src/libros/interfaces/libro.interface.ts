export interface LibroI{
  id: string;
  titulo: string;
  autor: string;
  descripcion?: string;
}

// Parametro description sera OPCIONAL, por el '?'
// description?: string;