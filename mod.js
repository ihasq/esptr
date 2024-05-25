const createNewAddress = () => {

}

/**
 * 
 * @param { any } initial 
 * @param { Function } callback 
 * @returns { number | BigInt }
 */

const $ = new Proxy((initial, callback) => {

	let buffer_address = createNewAddress();

	const ADDRESS = Object.defineProperties({}, {

		toString: {
			get() {
				const PREV_ADDRESS = buffer_address;
				buffer_address = createNewAddress();
				return PREV_ADDRESS;
			}
		}

	});

	Object.defineProperty($, ADDRESS, {
		get() {
			return initial
		},
		set(value) {
			value === initial
				? undefined
				: callback?.({ address: ADDRESS, newValue: value, oldValue: initial })
			return initial = value;
		},
	});

	return ADDRESS;

}, {

	get(t, prop) {

	}

});

$.isPointer = (pointer) => {
	
}

export { $ }