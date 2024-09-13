export type Some<T> = { kind: 'some'; value: T };
export type None = { kind: 'none' };
export type Option<T> = Some<T> | None;

export function some<T>(value: T): Some<T> {
    return { kind: 'some', value };
}

export function none(): None {
    return { kind: 'none' };
}

export function option<T>(value: T | undefined): Option<T> {
    if (value === null || value === undefined) {
        return none();
    } else {
        return some(value);
    }
}

export const Option =  {
    some,
    none
}