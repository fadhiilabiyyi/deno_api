import { createBeer } from "../services/beerService.js";

export default async ({ request, response }) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid beer data" };
    return;
  }

  const { name, brand, is_premium } = await request.body().value;

  console.log(await request.body({ type: "json" }).value);
  console.log(name);

  if (!name || !brand) {
    response.status = 422;
    response.body = { msg: "Incorrect beer data. Name and Brand are required" };
    return;
  }

  const beerId = await createBeer({ name, brand, is_premium});

  response.body = { msg: "Beer created", beerId }; 
};
