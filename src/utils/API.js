export async function getProductList() {
  let url = "https://api.json-generator.com/templates/6wrQjXvoGQc6/data";
  let res = await fetch(url, {
    headers: {
      Authorization: "Bearer 0oc9cd233cf7q8eqnh8u4uvmd18ws71ozips1vib",
    },
  });
  res = await res.json();
  return res;
}
