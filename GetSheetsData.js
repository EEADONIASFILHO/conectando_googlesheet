function getsheetdata() {
  // const url = "https://sheetdb.io/api/v1/ecg5jzxmp2btz"


  const url = "https://opensheet.elk.sh/1_eCRbbUKfJFksUUdJLHTf39I2SRtqrmqOexZZ1rSADs/1";
  console.log(url);
  fetch(url)
    .then((response) => response.json()
      .then((data) => {
      
        const found = data.find(element => element.sigla ="BRA");
        console.log(found.Pontos);
        data.forEach(element => {
          console.log(element.sigla);
          console.log(element.Viés);
       
        })

      }));
}

