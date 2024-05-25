type ESPointer = symbol

const PUBLISHED_PTR: ESPointer[] = [];

const $ = Object.assign((initial: any, callback?: Function): ESPointer => {

	const PTR: ESPointer = Symbol("address");

	PUBLISHED_PTR.push(PTR);

	const PUBLISHED_PTR_INCLUDES_INITIAL = PUBLISHED_PTR.includes(initial);

	Object.defineProperty($, PTR, {

		get(): any {
			return PUBLISHED_PTR_INCLUDES_INITIAL? $[initial] : initial;
		},

		set(value: any): any {

			if(PUBLISHED_PTR_INCLUDES_INITIAL) {
				return $[initial] = value;
			} else {
				value === initial
					? undefined
					: callback?.({
						newValue: value,
						oldValue: initial,
						pointer: PTR
					});
	
				return initial = value;
			}

		}
	})

	return PTR;

}, {

	isPointer(pointer: ESPointer): boolean {
		return PUBLISHED_PTR.includes(pointer)
	}

});

export { $ }