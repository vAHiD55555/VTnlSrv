export default async function handler(req, res) {
  try {
    const userID = env.UUID;
    const userHost = env.HOST;
    const userTPass = env.TPASS;
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
