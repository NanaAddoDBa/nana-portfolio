export type NavigationItemId = "home" | "about" | "projects" | "contact"

export type NavigationHref = `#${string}` | `/${string}`

export interface NavigationItem {
  id: NavigationItemId | string
  label: string
  href?: NavigationHref
  ariaLabel?: string
  items?: NavigationItem[]
}
