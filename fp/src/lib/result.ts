export type Success<T> = { kind: 'success'; value: T };
export type ResError<E> = { kind: 'error'; error: E };
export type Result<T, E = any> = Success<T> | ResError<E>;

export function success<T>(value: T): Success<T> {
    return { kind: 'success', value };
}

export function error<E>(error: E): ResError<E> {
    return { kind: 'error', error };
}

export const Result = {
    success,
    error
}