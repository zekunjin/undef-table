export const isNumber = (value: any): value is number => typeof value === 'number'

export const isFunction = (value: any): value is ((...args: any[]) => any) => typeof value === 'function'

export const calcCssUnit = (value?: string | number | undefined) => isNumber(value) ? `${value}px` : value
