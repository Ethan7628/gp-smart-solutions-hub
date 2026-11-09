import { describe, test } from "node:test";
import { deepStrictEqual, strictEqual } from "node:assert";
import { enquiryDefaults, serviceAreas } from "./enquiries";

describe("enquiry intent", () => {
  test("a free survey action retains the survey request", () => {
    strictEqual(enquiryDefaults({ request: "survey" }).subject, "Free site survey request");
  });
  test("an equipment action retains the selected item", () => {
    strictEqual(enquiryDefaults({ request: "equipment", item: "Outdoor Bullet Cameras" }).subject,
      "Equipment enquiry: Outdoor Bullet Cameras");
  });
  test("an area action retains the chosen site location", () => {
    strictEqual(enquiryDefaults({ request: "survey", area: "Wakiso" }).location, "Wakiso");
  });
  test("coverage includes all areas in the supplied brief", () => {
    deepStrictEqual([...serviceAreas], ["Kampala Central", "Kololo", "Nakasero", "Industrial Area", "Entebbe", "Wakiso", "Mukono", "Jinja"]);
  });
});