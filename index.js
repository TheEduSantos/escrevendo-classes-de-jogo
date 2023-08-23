class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    atacar() {
        let ataque;

        if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge" ) {
            ataque = "artes marciais";
        } else if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "ninja" ) {
            ataque = "shuriken";
        } else {
            console.log("Erro!!");
            return;
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
};

let hero1 = new hero("Aragorn", 35, "guerreiro")
hero1.atacar();

let hero2 = new hero("Merlin", 3000, "mago")
hero2.atacar();

let hero3 = new hero("Kakashi", 27, "ninja")
hero3.atacar();

let hero4 = new hero("Miroku", 20, "monge")
hero4.atacar();
