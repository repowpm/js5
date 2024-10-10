
export class Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
    }

    get Nombre(){
        return this._nombre;
    }
    get Edad(){
        return this._edad;
    }
    get Img(){
        return this._img;
    }
    get Comentarios(){
        return this._comentarios;
    }
    get Sonido(){
        return this._sonido;
    }
}

export class Leon extends Animal{
 
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
 
    Rugir(){
        return this.sonido;
    }
}

export class Lobo extends Animal{

    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Aullar(){
        return this.sonido;
    }
}

export class Oso extends Animal{

    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
  
    Gruñir(){
        return this.sonido;
    }
}

export class Serpiente extends Animal{

    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    
    Sisear(){
        return this.sonido;
    }
}

export class Aguila extends Animal{
    
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
  
    Chillar(){
        return this.sonido;
    }
}