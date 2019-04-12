class BaseError extends Error {
    constructor(message, code) {
        super(message);

        Error.captureStackTrace(this, this.constructor);

        Object.assign(this, { code });
    }
}

export class UnknownAlgorithmError extends BaseError {
    constructor(algorithm) {
        super(`Unknown algorithm \`${algorithm}\``, 'UNKNOWN_ALGORITHM');
    }
}

export class UnknownAlgorithmParamError extends BaseError {
    constructor(param) {
        super(`Unknown algorithm param \`${param}\``, 'UNKNOWN_ALGORITHM_PARAM');
    }
}

export class NilAlgorithmParamError extends BaseError {
    constructor(param) {
        super(`Algorithm param \`${param}\` can't be null or undefined`, 'NIL_ALGORITHM_PARAM');
    }
}

export class TypeMismatchAlgorithmParamError extends BaseError {
    constructor(param, type) {
        super(`Expected algorithm param \`${param}\` to be of type \`${type}\``, 'TYPE_ALGORITHM_PARAM');
    }
}