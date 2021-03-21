
class Multimedia {
    constructor(url){
        let _url = url;
        this.getUrl = () => _url;
    }

    setInicio(){
        return "Este método es para realizar un cambio en la URL del video";
    }

    get url(){
        return this.getUrl();
    }
}

class Reporductor extends Multimedia{
    
    constructor(url,id){
        super(url);
        let _id = id; 
        this.getId = () => _id;
    }

    get id(){
        return this.getId();
    }

    playMultimedia(){
        funcionAutoejecutable.funcionPublica(this.url,this.id);
    }

    setInicio(tiempo = 0) {
        const iframe = document.getElementById(this.id);
        iframe.setAttribute("src", `${this.url}?start=${tiempo}`);
    }
}

const funcionAutoejecutable = (() => {

    funcionPrivada = (url,id) => {
        const iframe = document.getElementById(id);
        iframe.setAttribute("src", url);
    }

    return {
        funcionPublica : (url,id) => {
            funcionPrivada(url,id);
        }
    }
})();

const pelicula = new Reporductor("https://www.youtube.com/embed/Zdlude8l8w4","iframepelicula");
pelicula.playMultimedia();
pelicula.setInicio(90);

const serie = new Reporductor("https://www.youtube.com/embed/SAlGf5Wfe4g","iframeserie");
serie.playMultimedia();

const musica = new Reporductor("https://www.youtube.com/embed/RtCC5p8ZOuY","iframemusica");
musica.playMultimedia();