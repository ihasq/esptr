const PUBLISHED_PTR: ESPointer[] = [];

const $ = Object.assign((initial: any, callback?: Function): any => {

	const PTR = Symbol("address");

	const WEAK_PTR: ESPointer = Object.defineProperties({
	
		toString() {
			return PTR
		},
		[Symbol.dispose]() {
			
		}
	
	}, {
		toString: {},
		[Symbol.dispose]: {}
	})

	PUBLISHED_PTR.push(WEAK_PTR);

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

	return WEAK_PTR;

}, {

	isPointer(pointer: ESPointer): boolean {
		return PUBLISHED_PTR.includes(pointer)
	}

});

export { $ }