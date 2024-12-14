export default async function handler(req, res) {
  try {
    const userID = req.url;
    const userHost = "my.com";
    const userTPass = "pass";
  
    const MyPage = `
     ID:  ${userID} 
     Host:  ${userHost} 
     TPass:  ${userTPass}   `;
////////////////////////////////
        const url = new URL(req.url);
        url.hostname = 'ictfz.ir';
        url.protocol = 'https:';
////////////////////////////////////////    
    res.status(200).send(MyPage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
