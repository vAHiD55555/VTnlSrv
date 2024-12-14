export default async function handler(req, res) {
  async fetch(request, env) {
    const userID = env.UUID;
    const userHost = env.HOST;
    const userTPass = env.TPASS;
    //${panelVersion}
    const MyPage = `
     ID:  ${userID} 
     Host:  ${userHost} 
     TPass:  ${userTPass}   `;
    return new Response(MyPage);
  },
};
