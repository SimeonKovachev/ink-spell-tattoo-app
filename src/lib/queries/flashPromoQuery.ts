export const FLASH_PROMO_QUERY = `
  *[
    _type == "flashPromo" &&
    active == true &&
    (
      !defined(validUntil) || validUntil >= now()
    )
  ] | order(validFrom desc) {
    _id,
    title,
    description,
    image {
      asset->{
        url
      }
    },
    validFrom,
    validUntil
  }
`;
