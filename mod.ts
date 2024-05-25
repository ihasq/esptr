type ESPointer = symbol

const PUBLISHED_PTR: ESPointer[] = [];

const $ = Object.assign((initial: any, callback: Function) => {

	const PTR: ESPointer = Symbol("address");

	PUBLISHED_PTR.push(PTR);

	Object.defineProperty($, PTR, {

		get(): any {
			return initial;
		},

		set(value: any): any {

			value === initial
				? undefined
				: callback?.({
					newValue: value,
					oldValue: initial,
					pointer: PTR
				});

			return initial = value;
		}
	})

	return PTR;

}, {

	isPointer: PUBLISHED_PTR.includes

});

export { $ }