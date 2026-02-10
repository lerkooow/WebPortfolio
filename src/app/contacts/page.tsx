import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing";

export default function page() {
  return redirect(`/${routing.defaultLocale}/contacts`);
}
