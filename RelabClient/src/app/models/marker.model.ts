export class Marker {
    icon = {}
   //Quando creo un nuovo marker e verifico quale label viene passata al costruttore, se contiene il testo
   //“Gas naturale” o “Energia elettrica” (abbreviati in Gas e Elettrica) imposto l’icona e cancello
   //l’etichetta
    constructor(public lat: number, public lng: number, public label?: string)
    {
        if (this.label.includes("naturale")) {
            this.icon = { url: './assets/img/fire-extinguisher-48.ico' };
             this.label = "";
        }
        if(this.label.includes("elettrica"))
        {
            this.icon = { url: './assets/img/flash-48.ico' };
             this.label = "";
        }
        if(this.label.includes("solide"))
        {
            this.icon = { url: './assets/img/tree-45-48.ico' };
             this.label = "";
        }
        if(this.label.includes("Olio"))
        {
            this.icon = { url: './assets/img/toxic-48.ico' };
             this.label = "";
        }
        if(this.label.includes("Teleriscaldamento"))
        {
            this.icon = { url: './assets/img/water-48.ico' };
             this.label = "";
        }
        if(this.label.includes("RSU"))
        {
            this.icon = { url: './assets/img/trash-48.ico' };
             this.label = "";
        }
        if(this.label.includes("liquide"))
        {
            this.icon = { url: './assets/img/smoke-explosion-48.ico' };
             this.label = "";
        }
        if(this.label.includes("NULL"))
        {
            this.icon = { url: './assets/img/sad-48.ico' };
             this.label = "";
        }
        if(this.label.includes("GPL"))
        {
            this.icon = { url: './assets/img/gas-pump-48.ico' };
             this.label = "";
        }
        if(this.label.includes("Gasolio"))
        {
            this.icon = { url: './assets/img/gas-48.ico' };
             this.label = "";
        }
    }
  }
