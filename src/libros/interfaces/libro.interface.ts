export interface LibroI{
  id: string;
  titulo: string;
  autor: string;
  description?: string;
}

// Parametro description sera OPCIONAL, por el '?'
// description?: string;