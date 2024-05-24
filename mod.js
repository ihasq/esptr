let buffer_next_address = 0;

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
		enumerable: false
	})
	return buffer_next_address++;
}

export { $ }