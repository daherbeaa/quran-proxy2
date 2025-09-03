export default async function handler(req, res) {
  const url = "https://live.eu-north-1b.cf.dmcdn.net/sec2(5cx2BYLKv1AyIy2WlESDcn1cIrHhOTXNTV37VNE6yx_E6nY7lZwnS8dIqWzEoNEkXvd1MoUHoZMgfQWqnOaivGNYxHxJqILxQh2ZO4FLKAHu4hlkx4YtyWW19IKyH3ou)/dm/3/x84wyku/s/live-480.m3u8";

  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" }
    });

    if (!response.ok) {
      res.status(response.status).send("Stream not available");
      return;
    }

    res.setHeader("Content-Type", "application/vnd.apple.mpegurl");
    response.body.pipe(res);
  } catch (err) {
    res.status(500).send("Proxy error: " + err.message);
  }
}
