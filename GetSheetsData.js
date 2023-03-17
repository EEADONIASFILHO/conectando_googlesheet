function getsheetdata ()
{ 
    const url = "https://sheetdb.io/api/v1/ecg5jzxmp2btz"
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.keys());
        data.forEach(element => {
          console.log(element.sigla);
          console.log(element.Viés);
        
        });
      
      });
};

  