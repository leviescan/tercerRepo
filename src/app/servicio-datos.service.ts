import { PrimerServicioService } from './primer-servicio.service';
import { Injectable } from '@angular/core';
import { Empleado } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioDatosService {


  empleadoDatos:Empleado[]=[

    new Empleado('luis','diaz','futbolista', 3000),
    new Empleado('kemi','papaz','gamer', 4000)
  ];

  addUserService(empleadoService:Empleado){

    this.servicioVentana.muestraMensaje('persona que se agregara:' +'\n'+empleadoService.nombre+'\n'+ 
    'salrio.'+ empleadoService.salario);

    this.empleadoDatos.push(empleadoService);

  }

  encontrarUsuario(indice:number){ //metodo para poner los datos de empleado en empleado nevo

    let empleadoNuevo:Empleado=this.empleadoDatos[indice];
    return empleadoNuevo;

  }

  upgradeUserService(indice:number, usuario:Empleado){
    
    let usuarioModificado=this.empleadoDatos[indice];

    usuarioModificado.nombre=usuario.nombre;
    usuarioModificado.apellido=usuario.apellido;
    usuarioModificado.cargo=usuario.cargo;
    usuarioModificado.salario=usuario.salario;

  }

  deleteUserService(indice:number){
    
    this.empleadoDatos.splice(indice,1);

    

  }

  constructor(private servicioVentana:PrimerServicioService) { }
}
