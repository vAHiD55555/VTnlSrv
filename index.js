export default async function handler(req, res) {
  try {
    const userID = req.url;
    const userHost = req.method;
    const userTPass = req.port;
  
    const MyPage = `
     ID:  ${userID} 
     Host:  ${userHost} 
     TPass:  ${userTPass}   `;
    
     const MyURL = `ws://host.chiphost.site${userID}`;   
////////////////////////////////
        const url = new URL(MyURL);
        //url.hostname = 'ictfz.ir';
        //url.protocol = 'https:';

        const response = await fetch(url, {  //url.toString()
            method: req.method,
            headers: req.headers,
            body: req.body,
        });
////////////////////////////////////////    
    //res.status(200).send(MyPage); //MyPage  
    //res.status(response.status).json(await response.text());
    res.status(response.status).send(await response.text());
    
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
