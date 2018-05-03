import { LinkGridItem } from "./link-grid-item";

export interface LinkGrid {
    title: string,
    description?: string[],
    items: LinkGridItem[]
}