
import { Blurb } from "./blurb";

export interface BlurbList {
    title: string,
    description?: string[],
    blurbs: Blurb[],
    map_url?: string
}