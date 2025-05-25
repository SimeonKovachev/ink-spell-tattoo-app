// lib/fetchSiteAlert.ts
import { unstable_noStore as noStore } from "next/cache";
import { client } from "./client";
import { SITE_ALERT_QUERY } from "./queries/siteAlertQuery";
import type { SiteAlert } from "@/types/siteAlert";

export async function getSiteAlert(): Promise<SiteAlert | null> {
  noStore();

  const alert = await client.fetch<SiteAlert | null>(SITE_ALERT_QUERY);

  return alert?.enabled ? alert : null;
}
