export async function fetchData(id: string) {
  const data = await fetch(`/api/resource/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await data.json();
}
