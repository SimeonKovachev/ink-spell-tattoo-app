export const SITE_ALERT_QUERY = `
*[_type == "siteAlert" && defined(enabled) ][0]{
  enabled,
  message,
  variant
}`;
