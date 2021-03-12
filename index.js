const express = require("express");
const app = express();

app.set('view engine','ejs');
app.use(express.static("public"));

app.get("/:nome/:lang",(req,res)=>{

    var nome = req.params.nome;
    var lang = req.params.lang;

    res.render("index",{
        nome:nome,
        lang:lang
    });
});

app.listen(3000,(erro)=>{
    if(erro)
        console.log("Erro ao iniciar");
    else{
        console.log("Servidor iniciado com sucesso");
    }
});