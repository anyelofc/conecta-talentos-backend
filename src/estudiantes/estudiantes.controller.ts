import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common';
import { Estudiante } from 'src/models/estudiante';
import { EstudiantesService } from './estudiantes.service';
import { Response } from 'express';

@Controller() //localhost:3000/estudiantes
export class EstudiantesController {
    // Inyección del servicio
    constructor( private readonly estudiantesService: EstudiantesService ){} 
    // a. Registrar un nuevo estudiante
    @Post('estudiantes')
    registrarEstudiante(@Body() estudiante: Estudiante, @Res() response: Response) {
        const estudiante1 = this.estudiantesService.crearEstudiante(estudiante);
        if(estudiante1){
            return response.status(200).send(estudiante1);
        }else{
            return response.status(400).send({mensaje: 'Ya existe estudiante con ese email'});
        }
    }

    // b. Obtener un estudiante según su id 
    @Get('estudiantes/:id') //localhost:3000/estudiantes/1
    obtenerEstudiantePorId(@Param('id') id: number, @Res() response: Response)  {
        const estudiante = this.estudiantesService.obtenerEstudiantePorId(id);
        if(estudiante){
            return response.status(200).send(estudiante);
        }else{
            return response.status(404).send({mensaje: 'Estudiante no encontrado'});
        }
    }

    // c. Obtener todos los estudiantes
    @Get('estudiantes')
    obtenerEstudiantes() {
        return this.estudiantesService.obtenerTodosLosEstudiantes();
    }

    // d. Eliminar un estudiante según su id
    @Delete('estudiantes/:id') //localhost:3000/estudiantes/1
    eliminarEstudiante(@Param('id') id: number) {
        console.log(id);
        return id;
    }
}