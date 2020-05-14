export class Marker {
    icon = {}
   //Quando creo un nuovo marker e verifico quale label viene passata al costruttore, se contiene il testo
   //“Gas naturale” o “Energia elettrica” (abbreviati in Gas e Elettrica) imposto l’icona e cancello
   //l’etichetta
    constructor(public lat: number, public lng: number, public label?: string)
    {
        if (this.label.includes("Gas")) {
            this.icon = { url: './assets/img/robot-16.ico' };
             this.label = "";
        }
        if(this.label.includes("elettrica"))
        {
            this.icon = { url: './assets/img/toilet-paper-16.ico' };
             this.label = "";
        }

        if(this.label.includes(""))
        {
            this.icon = { url: './assets/img/facebook-like-16.ico' };
             this.label = "";
        }

        if(this.label.includes(""))
        {
            this.icon = { url: './assets/img/house-16.ico' };
             this.label = "";
        }
        if(this.label.includes(""))
        {
            this.icon = { url: './assets/img/internet-explorer-16.ico' };
             this.label = "";
        }
        if(this.label.includes(""))
        {
            this.icon = { url: './assets/img/laptop-4-16.ico' };
             this.label = "";
        }
        if(this.label.includes(""))
        {
            this.icon = { url: './assets/img/pickup-16.ico' };
             this.label = "";
        }
        if(this.label.includes(""))
        {
            this.icon = { url: './assets/img/pizza-3-16.ico' };
             this.label = "";
        }
        if(this.label.includes(""))
        {
            this.icon = { url: './assets/img/planet-16.ico' };
             this.label = "";
        }
        if(this.label.includes(""))
        {
            this.icon = { url: './assets/img/robot-16.ico' };
             this.label = "";
        }

    }
  }
