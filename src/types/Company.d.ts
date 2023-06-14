export interface Company {
    id: string
    name: string
    description: string
    details?: string
    kind: CompanyKind
    links: Link[]
    mediaSlides: string[]
}

export interface Link {
    id: string
    kind : LinkKind
    url: string
}

export type LinkKind = "Facebook" | "Instagram" | "Site" | "Telegram" | "WhatsApp"
export interface CompanyKind{kinds: "Brand" | "Company"}