import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  banco!:Array<String>;
  palabra!:String;
  pregunta!:string;
  opciones!:Array<any>;
  indice!:number;
  jugando!:boolean;
  preguntas!:Array<string>; 
  acierto!:number;
  error!:number;
  puntaje!:number;
  clase!:string;




  constructor() { 
   this.banco=[
      "GATO",
      "CASA",
      "JIRAFA",
      "MANZANA",
      "BANANA",
      "ESTRELLA",
      "MARIPOSA",
      "CARAMELO",
      "AUTO",
      "ZAPATO"
    ];
    this.preguntas=
      [
        "Cuantas vocales tiene la palabra: ",
        "Cuantas consonantes tiene la palabra: ",
         "Cuantas silabas tiene la palabra: ",
         "Cuantas letras tiene la palabra: "
      ];
    
    this.indice=-1;
    this.jugando=false;
    this.acierto=0;
    this.error=0;
    this.puntaje=0;
   

//esto ira en avanzar
    
  }

  ngOnInit(): void {
  }

public play():void
{
  this.indice=-1;
    this.jugando=false;
    this.acierto=0;
    this.error=0;
    this.puntaje=0;
  this.banco.sort(() => Math.random() - 0.5);
  this.jugando=true; 
  this.avanzar();
}

  public avanzar(opcion?:any):void
  {
    if(this.indice<9){ 
    this.palabra=this.banco[++this.indice];
    this.pregunta=this.preguntas[ Math.floor(Math.random() * 4)];
    this.opciones= this.generarOpciones();
    this.actualizarPuntajes(opcion);
    }else
    {
      document.getElementById("llamarModal")?.click();
      this.jugando=false;
    }
    
   
   
  }

  //FUNCIONES DE CALCULO

  private actualizarPuntajes(option:any):void
  {
     (option.correcto)? this.puntaje=(++this.acierto*20) : ++this.error;
     this.clase = option.correcto? "acierto":"error";
      
  }

  private generarOpciones()
  {
    let opciones:Array<any>=[];
    opciones.push(this.generarRespuesta());
    while (opciones.length < 4) {
      let opcion = Math.floor(Math.random() * 15) + 1;
      if (!opciones.some(item => item.opcion === opcion)) {
        opciones.push({ opcion: opcion, correcto: false });
      }
    }
    return opciones.sort(() => Math.random() - 0.5);

}

  private generarRespuesta()
  {
    let respuesta={
      opcion:0,
      correcto:true
    }
    switch(this.preguntas.indexOf(this.pregunta)){

      case 0: 
       respuesta.opcion = this.contarVocales(this.palabra);
      break; 
      
      case 1: 
      respuesta.opcion = this.contarConsonantes(this.palabra);
      break; 
      
      case 2:
        respuesta.opcion = this.contarSilabas(this.palabra); 
      break; 
      
      case 3: 
      respuesta.opcion = this.contarLetras(this.palabra); 
      break; 
      default:
        console.log("no entra")
        break;
      
    }

    return respuesta; 
  }

  /*Retorna el numero de vocales, si la vocal se repite solo se contara como 1 */
  private contarVocales(palabra:String):number
  {
   const vocales=["a","e","i","o","u"];
   let caracteres= palabra.toLowerCase().split("");
   let array = new Set(caracteres.filter(caracter=>vocales.includes(caracter)));
   return Array.from(array).length;
  }

  private contarConsonantes(palabra:String)
  {
    const vocales=["a","e","i","o","u"];
    let caracteres= palabra.toLowerCase().split("");
    let consonantes = new Set(caracteres.filter(caracter=>!vocales.includes(caracter)));
    return Array.from(consonantes).length;
  }

  private contarLetras(palabra:String)
  {
     return palabra.length; 
  }

  //TODO 
  private contarSilabas(palabra: String) {
    palabra = palabra.toLocaleLowerCase();
    let silabas = 0;
    let ultimaVocal = false;
    for (let i = 0; i < palabra.length; i++) {
      const letra = palabra.charAt(i);
      if (/[aeiouáéíóú]/.test(letra)) {
        if (!ultimaVocal) {
          silabas++;
        }
        ultimaVocal = true;
      } else {
        ultimaVocal = false;
      }
    }
    const ultimasLetras = palabra.substr(-2);
    if (/[aeiouáéíóú][ns]$/.test(ultimasLetras)) {
      silabas--;
    } else if (/[áéíóú]$/.test(ultimasLetras)) {
      silabas++;
    }
    return silabas;
  }
  
  
}
