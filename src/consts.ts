import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Almondd",
  DESCRIPTION: "",
  AUTHOR: "Madhuri Basant",
}



// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  }
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "hello@almondd.in",
    HREF: "hello@almondd.in",
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "almondd",
    HREF: "https://www.linkedin.com/company/almondd/",
  },
  { 
    NAME: "Instagram",
    ICON: "instagram",
    TEXT: "markhorn_dev",
    HREF: "https://instagram.com/almondd_agency?igshid=YmMyMTA2M2Y=",
  },

  { 
    NAME: "Facebook",
    ICON: "facebook",
    TEXT: "markhorn_dev",
    HREF: "https://www.facebook.com/almonddagency",
  },
]

