require("dotenv").config();

export default async function handler(req, res) {
  try {
    const userID = process.env.UUID;
    const userHost = process.env.HOST;
    const userTPass = process.env.TPASS;
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
