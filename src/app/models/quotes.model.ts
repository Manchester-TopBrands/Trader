import { Strategies } from './strategies.model';
import { Arbit } from "./arbit.model";
import { Ewz } from "./ewz.model";
import { Wdo } from "./wdo.model";
import { Win } from "./win.model";

export interface Quotes {
    Arbit: Arbit;
    Win: Win;
    Wdo: Wdo;
    Ewz: Ewz;
    Strategies: Strategies[];
}
