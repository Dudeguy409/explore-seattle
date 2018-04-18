import { Link } from "./link";

export interface Blurb {
    title: string;
    description: string[];
    titleRouterLink?:string;
    isMain?: boolean;
    externalLinks?:Link[];
    seeAlso?:Link[];
}