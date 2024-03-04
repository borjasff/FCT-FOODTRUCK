// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"
import useFoodtruck from "../../hooks/useFoodtruck";



export default async function handler(req, res) {
  
  const UrlBase = `http://localhost:4433/APIFRAMEWORKS/product.php?` ;
  const peticionGet = async () => {
    
    try {
      //utilizamos axios para obtener los valores de la url
      const res = await axios.get(UrlBase);
      //console.log(res.data);
      //console.log("----------------------------------------------------")
      //console.log(UrlBase)
    
      return res.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  try {
    //realizamos la llamada a la función y retornamos un json con los datos
    const data = await peticionGet();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error in API handler:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
