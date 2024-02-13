/**
 * Fonction qui envoie des donnees au serveur
 * @param {string} url
 * @param {data} data
 * @return {Promise}
 */
/*export function fetchData(url,data){
    return new Promise((resolve, reject) => {
        const dataToSend = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
  
        fetch(url,dataToSend).then((response)=>{
            if(!response.ok){
                if(response.status === 400){
                    return reject({ message: 'cet email existe deja' })
                }
                else if(response.status === 500){
                    return reject({ message: 'Erreur connexion' });
                }
                return reject({ message: `Erreur inconnue : ${response.statusText}` });
            }
            return response.json()

        }).then((result)=>{
            return resolve(result)
        }).catch((error) => {
            reject({ message: error.message });
          });
    })
}*/
export async function fetchData(url , data) {
    
    const response = await fetch(url, {
      method: "POST", 
      mode: "cors", 
      headers: {
        "Content-Type": "application/json",
        
      },
     
      body: JSON.stringify(data), 
    });
    return response.json(); 
  }
  
 