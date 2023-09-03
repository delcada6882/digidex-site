import { Descriptions } from "./descriptions";
import { Fields } from "./fields";
import { Evolutions } from "./evolutions";
import { Skills } from "./skills";
import { Attributes } from "./attributes";
import { Types } from "./types";
import { Level } from "./level";
import { Image } from "./image";

export interface DigiDetails {
    id: number;
    name: string;
    images: Image[];
    levels: Level[];
    types: Types[];
    attributes: Attributes[];
    fields: Fields[];
    descriptions: Descriptions[];
    skills: Skills[];
    priorEvolutions: Evolutions[];
    nextEvolutions: Evolutions[];
}
