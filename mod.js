let buffer_next_address = 0;

/**
 * 
 * @param { any } initial 
 * @param { Function } callback 
 * @returns { number | BigInt }
 */

const $ = (initial, callback) => {

	const ADDRESS = buffer_next_address;

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

	return buffer_next_address = buffer_next_address == Number.MAX_SAFE_INTEGER

		? BigInt(buffer_next_address)
		: buffer_next_address++
}

export { $ }