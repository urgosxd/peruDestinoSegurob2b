function* zip<T extends any[][]>(...args: T) {
    for (let i = 0; i < Math.min(...args.map((e) => { return e.length })); ++i) {
        yield args.map((e) => { return e[i]; }) as
            { [I in keyof T]: T[I][number] };
    }
}
export {zip};
