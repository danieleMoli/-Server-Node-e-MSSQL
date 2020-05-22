import { Icon } from './icon.model';

export class Marker {
    icon = {}
   //Quando creo un nuovo marker e verifico quale label viene passata al costruttore, se contiene il testo
   //“Gas naturale” o “Energia elettrica” (abbreviati in Gas e Elettrica) imposto l’icona e cancello
   //l’etichetta
    constructor(public lat: number, public lng: number, public label?: string)
    {
        if (this.label.includes("naturale")) {
          this.icon = new Icon ( './assets/img/fire-extinguisher-48.ico', 24 ); //da modificare per ogni icona
           this.label = "";
           return;
        }


        if(this.label.includes("elettrica"))
        {
            this.icon = new Icon ('./assets/img/flash-48.ico',24 );
             this.label = "";
             return;
        }



        if(this.label.includes("solide"))
        {
            this.icon =new Icon ('./assets/img/tree-45-48.ico',24);
             this.label = "";
             return;
        }
        if(this.label.includes("Olio"))
        {
            this.icon =new Icon ('./assets/img/toxic-48.ico',24 );
             this.label = "";
             return;
        }

        if(this.label.includes("Teleriscaldamento"))
        {
            this.icon = new Icon ('./assets/img/water-48.ico',24 );
             this.label = "";
             return;

        }
        if(this.label.includes("RSU"))
        {
            this.icon = new Icon ('./assets/img/trash-48.ico',24);
             this.label = "";
             return;
        }

        if(this.label.includes("liquide"))
        {
            this.icon = new Icon ('./assets/img/smoke-explosion-48.ico',24);
             this.label = "";
             return;
        }


        if(this.label.includes("NULL"))
        {
            this.icon = new Icon ('./assets/img/sad-48.ico',24);
             this.label = "";
             return;
        }

        if(this.label.includes("GPL"))
        {
            this.icon =new Icon ('./assets/img/gas-pump-48.ico',24);
             this.label = "";
             return;
        }

        if(this.label.includes("Gasolio"))
        {
            this.icon = new Icon ( './assets/img/gas-48.ico',24);
             this.label = "";
             return;
        }
    }
  }
