import { Quotes } from "./quotes.model";
import { Strategies } from "./strategies.model";

export interface Data {
    Timestamp: number;
    Status: string;
    Quotes: Quotes;
    Strategies?: Strategies[];
}
