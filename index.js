export default async function handler(req, res) {
  try {
    const userID = "XXX";
    const userHost = "my.com";
    const userTPass = "pass";
    //${panelVersion}
    const MyPage = `
     ID:  ${userID} 
     Host:  ${userHost} 
     TPass:  ${userTPass}   `;
    
    res.status(response.status).json(MyPage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
