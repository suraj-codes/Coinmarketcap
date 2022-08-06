// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  const getData = async () => {
    const response = await fetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=INR&CMC_PRO_API_KEY=38630c01-6c68-4fb6-9a45-fc23140460e8`,
      {
        method: "GET",
        headers: {
          Accept: "*/*",
        },
      }
    );

    const data = await response.json();

    res.status(200).json({ data });
  };

  getData();
}
