// helper function for getting the base64 value of an image for use in a blurred placeholder

import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export default async function getBase64(imageUrl: string) {
  try {
    const file = await fs.readFile(`/images/${imageUrl}`);

    const { base64 } = await getPlaiceholder(file);

    console.log(base64);
    return base64;
  } catch (err) {
    err;
  }
}
