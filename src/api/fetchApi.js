const key = "7298cf5bffc24e2968bf9bb0";

const url = "https://v6.exchangerate-api.com/v6/";

async function fetchApi({ base, target, value }) {
  // const response = await fetch(`${url}/${key}/latest/USD`)
  //   .then((res) => res.json())
  //   .catch((error) => console.log(error));

  // return response.conversion_rates;

  const response = await fetch(`${url}/${key}/pair/${base}/${target}/${value}`)
    .then((res) => res.json())
    .catch((error) => console.log(error));

  return [response.conversion_rate, response.conversion_result];
}

export default fetchApi;
