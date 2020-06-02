module.exports = class Feature {
    constructor(id, geometry, media, somma) {
        this.type = "Feature";
        this.properties = new Properties(id, media, somma);//aggiungiamo nelle proprieta la media e la somma
        this.geometry = geometry;
    }
}
class Properties
{
    constructor(id, media, somma)
    {
        this.id = id;
        this.media = media;
        this.somma = somma;
    }
}

