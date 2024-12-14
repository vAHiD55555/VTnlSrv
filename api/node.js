export default async function handler(req, res) {
    try {

        const url = new URL(req.url);
        url.hostname = 'ictfz.ir';
        url.protocol = 'https:';


        // Fetch the request and forward it to the new URL
        const response = await fetch(url.toString(), {
            method: req.method,
            headers: req.headers,
            body: req.body,
        });

        // Return the response from the forwarded request
        res.status(response.status).json(await response.text());
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
