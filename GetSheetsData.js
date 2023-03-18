function getsheetdata() {
// Esta função com ajuda do endpoint da poensheet.elk.sh TEMOS ACESSO A NOSSA SHEET 
  // para fazermos um fetch e obeter os dados no padroão JSON
  const site = "https://opensheet.elk.sh/";
  const sheetid= "1_eCRbbUKfJFksUUdJLHTf39I2SRtqrmqOexZZ1rSADs/1"; // acabando com /1 para acessar 1-planilha
  var urlacesso = site + sheetid;
  // quando vc compartilha sua planilha no sheets ela têm um id unico que é a parte essencial do 
  //link de compartilhamento, é uma espécie de nome codificado de sua planilha aqui estamos chamando de sheetid
  
  console.log(urlacesso);
  fetch(urlacesso)
    .then((response) => response.json()
      .then((data) => {
        console.log(data.keys());
        console.log(data.length + " Países Detectados");
        // var procurado = data.find(element => element.sigla ="BRA");
        // console.log(procurado.Pontos);
        var s="\t";
        console.log("#"+s+"Sigla"+s+"Pontos"+s+s+"Viés"+s+"Seleção");
        data.forEach(element => {
          console.log(element.ranking+s+element.sigla+"  "+s+element.pontos+s+s+element.viés+s+element.selecao);
        })

      }))
}
