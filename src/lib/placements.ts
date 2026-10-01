export interface PlacementPoster {
  src: string
  width: number
  height: number
  title: string
  alt: string
}

export const PLACEMENTS = {
  eyebrow: "Recent Placements",
  heading: "Our Students, Now Working in Dubai",
  intro:
    "The latest learners from Versa Global's IT Infrastructure Engineer Program to be placed in IT roles in Dubai — including students who moved from the UK to the UAE.",
  noticeTitle: "New Placements in Dubai",
  noticeText: "Congratulations to our latest batch — placed in IT roles in Dubai through Versa Global.",
  cta: { label: "See the Job-Assured Dubai IT Program", href: "/career-academy/it-infrastructure-engineer-program-dubai" },
  rollHeading: "The Versa Global Bundle Pack Family",
}

export const PLACEMENT_POSTERS: PlacementPoster[] = [
  {
    src: "/placements/placement-uk-to-dubai-it-system-admin.jpg",
    width: 1200,
    height: 1200,
    title: "Placed as IT System Admin — from the UK to Dubai",
    alt: "Versa Global placement poster congratulating a student placed as IT System Admin in Dubai after moving from the UK",
  },
  {
    src: "/placements/placement-in-dubai-1.jpg",
    width: 1200,
    height: 1200,
    title: "Placement in Dubai",
    alt: "Versa Global placement poster congratulating a student on a placement in Dubai",
  },
  {
    src: "/placements/placement-uk-to-dubai-2.jpg",
    width: 1200,
    height: 1200,
    title: "Placement from the UK to Dubai",
    alt: "Versa Global placement poster congratulating a student on a placement in Dubai after moving from the UK",
  },
  {
    src: "/placements/placement-in-dubai-2.jpg",
    width: 1200,
    height: 1136,
    title: "Placement in Dubai",
    alt: "Versa Global placement poster congratulating a student on a well-deserved placement in Dubai",
  },
  {
    src: "/placements/versa-global-bundle-pack-family.jpg",
    width: 1200,
    height: 848,
    title: "Our Versa Global Bundle Pack Family",
    alt: "Versa Global Bundle Pack Family — twelve placed students with their IT job roles",
  },
]

/** Names and roles as published on the "Bundle Pack Family" poster. */
export const PLACED_STUDENTS: { name: string; role: string }[] = [
  { name: "Jahfar", role: "IT Support" },
  { name: "Sajini", role: "IT Support Engineer" },
  { name: "Likhitha", role: "Junior IT Administrator" },
  { name: "Hisana Nazrin", role: "Technical Support Engineer" },
  { name: "Abdullah Naushad", role: "IT Support" },
  { name: "Arun", role: "IT Engineer" },
  { name: "Ansil Rasac", role: "IT Administrator" },
  { name: "Mithun", role: "Desktop Support Engineer" },
  { name: "Nirmal", role: "IT Support" },
  { name: "Jissmon", role: "System Support" },
  { name: "Mufsin", role: "Network Engineer" },
  { name: "Sufaija", role: "IT System Engineer" },
]
