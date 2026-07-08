/** Single source of truth for business facts — only confirmed data from brief.md. */
export const site = {
  name: "Singh Fencing Canberra",
  shortName: "Singh Fencing",
  baseSuburb: "Amaroo",
  region: "Gungahlin & north Canberra",
  state: "ACT",
  phoneDisplay: "0424 249 320",
  phoneHref: "tel:0424249320",
  email: "sales@singhfencing.com",
  emailHref: "mailto:sales@singhfencing.com",
  facebook: "https://www.facebook.com/profile.php?id=61551528764919",
  instagram: "https://www.instagram.com/singh_fencing_canberra",
  suburbs: [
    "Gungahlin",
    "Amaroo",
    "Harrison",
    "Palmerston",
    "Bonner",
    "Ngunnawal",
    "Nicholls",
  ],
  payments: "Cash, EFT, EFTPOS, Mastercard & Visa",
} as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Areas", href: "#areas" },
  { label: "How It Works", href: "#how" },
  { label: "Contact", href: "#contact" },
] as const;
