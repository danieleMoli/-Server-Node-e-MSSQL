export class Icon { //Commenta qui : nella classe icon creiamo un oggetto per gestire le dimensioni delle icone
    public scaledSize:ScaledSize;
    constructor(public url: string, size: number){
        this.scaledSize = new ScaledSize(size,size);
    }

    setSize(size: number) { //Commenta qui: tramite il metodo setsize possiamo impostare le dimensioni delle icone
        this.scaledSize = new ScaledSize(size,size);
    }
}

export class ScaledSize { //Commenta qui: dentro la classe scaledSize passiamo l'altezza e la larghezza
    constructor(
    public width:  number,
    public height: number){}
}
