import { Injectable } from '@nestjs/common';
import { Estudiante } from 'src/models/estudiante';

@Injectable()
export class EstudiantesService {
    private estudiantes: Estudiante[] = [];
    
    constructor(){
        this.estudiantes.push(
            new Estudiante(
                1, 
                'Juan', 
                'Perez', 
                20, 
                'Ingeniero',
                'mail@mail.com'
            )
        );
    }

    obtenerTodosLosEstudiantes():Estudiante[]{
        return this.estudiantes;
    }

    obtenerEstudiantePorId(id: number): Estudiante{
        for( let i = 0; i < this.estudiantes.length; i++){
            if(this.estudiantes[i].id == id){
                return this.estudiantes[i];
            }
        }
    }

    crearEstudiante(estudiante: Estudiante): Estudiante{
        for( let i = 0; i < this.estudiantes.length; i++){
            if(this.estudiantes[i].email == estudiante.email){
                return null;
            }
        }
        //Asignación de ID para nuevo estudiante
        estudiante.id = this.estudiantes.length + 1;
        this.estudiantes.push(estudiante);
        return estudiante;
    }

    eliminarEstudiante(id: number): void{
        //this.estudiantes.splice( id -1, 1)
        for( let i = 0; i < this.estudiantes.length; i++){
            if(this.estudiantes[i].id == id){
                this.estudiantes.splice(i, 1);
            }
        }
    }
}
