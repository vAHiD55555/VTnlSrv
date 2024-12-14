export default async function handler(req, res) {
  try {
    const userID = req.url;
    const userHost = req.method;
    const userTPass = req.protocol;
  
    const MyPage = `
     ID:  ${userID} 
     Host:  ${userHost} 
     TPass:  ${userTPass}   `;
    
     const MyURL = `https://ictfz.ir${userID}`;   
////////////////////////////////
        const url = new URL(MyURL);
        url.hostname = 'ictfz.ir';
        url.protocol = 'https:';

        const response = await fetch(url.toString(), {
            method: req.method,
            headers: req.headers,
            body: req.body,
        });
////////////////////////////////////////    
    res.status(200).send(MyPage);
    //res.status(response.status).send(await response.text());
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
