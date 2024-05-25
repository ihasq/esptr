const createAddress = () => {

}

/**
 * 
 * @param { any } initial 
 * @param { Function } callback 
 * @returns { number | BigInt }
 */

const $ = new Proxy(Object.assign((initial, callback) => {

	let buffer_address = undefined;
	let buffer_validationLimit = -1;

	return Object.defineProperties({}, {

		toString: {

			get() {
				buffer_address = createAddress();
				buffer_validationLimit = setTimeout(() => {
					
				});
				return buffer_address;
			}

		}

	});;

}, {

	isPointer(pointer) {

	}

}), {

	get(t, prop) {

	}

});

export { $ }