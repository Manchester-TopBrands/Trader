import { Desc } from "./desc.model";
import { Position } from "./position.model";
import { Profit } from "./profit.model";

export interface Strategies {
    Desc: Desc;
    Position: Position;
    Profit: Profit;
    ArbitIndex: number;
    Startstamp: number;
    Trades: number;
    Updates: number;
}
