import express, { json } from 'express';
import cors from 'cors';
import path from 'path';
import userRoutes from './routes/userRoutes.js';

const app = express();

// Middlewares
app.use(cors({
  origin: 'http://ec2-34-226-119-213.compute-1.amazonaws.com:3000', // Solo permitir solicitudes desde este dominio
  methods: ['GET', 'POST'], // Solo permitir GET y POST
})); // Permitir acceso del frontend al backend

app.use(json()); // Parsear JSON en las solicitudes


// Rutas de la API
app.use('/api/usuarios', userRoutes);

// Iniciar servidor
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
