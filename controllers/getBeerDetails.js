import { getBeer } from "../services/beerService.js";

export default async ({ params, response }) => {
  const beerId = params.id;

  if (!beerId) {
    response.status = 400;
    response.body = { msg : "Invalid beer id"};
    return;
  }

  const foundBeer = await getBeer(beerId);
  if (!foundBeer) {
    response.status = 404;
    response.body = { msg: `Beer with ID ${berrId} not found` };
    return;
  }

  response.body = foundBeer;
};