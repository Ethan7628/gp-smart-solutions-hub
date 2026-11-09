export type EnquirySearch = {
  request?: "survey" | "equipment";
  item?: string;
  area?: string;
};

export const serviceAreas = [
  "Kampala Central", "Kololo", "Nakasero", "Industrial Area",
  "Entebbe", "Wakiso", "Mukono", "Jinja",
] as const;

export function enquiryDefaults(search: EnquirySearch) {
  return {
    location: search.area ?? "",
    subject: search.request === "survey"
      ? "Free site survey request"
      : search.request === "equipment"
        ? `Equipment enquiry: ${search.item ?? "Hardware"}`.slice(0, 120)
        : "",
    message: search.request === "survey"
      ? "I'd like to book a free site survey to assess CCTV, cabling or Wi-Fi requirements at my premises."
      : search.request === "equipment"
        ? `I'm interested in ${search.item ?? "your equipment"}. Please advise on suitable models, specifications, availability and pricing.`
        : "",
    contactMethod: "WhatsApp" as const,
  };
}