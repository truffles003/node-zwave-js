/// <reference types="node" />
import { IDriver } from "../driver/IDriver";
import { CommandClass } from "./CommandClass";
export declare enum BasicCommand {
    Set = 1,
    Get = 2,
    Report = 3
}
export declare class BasicCC extends CommandClass {
    nodeId: number;
    ccCommand?: BasicCommand;
    constructor(driver: IDriver, nodeId?: number);
    constructor(driver: IDriver, nodeId: number, ccCommand: BasicCommand.Get);
    constructor(driver: IDriver, nodeId: number, ccCommand: BasicCommand.Set, targetValue: number);
    private _currentValue;
    readonly currentValue: number;
    private _targetValue;
    readonly targetValue: number;
    private _duration;
    readonly duration: number;
    serialize(): Buffer;
    deserialize(data: Buffer): void;
}
