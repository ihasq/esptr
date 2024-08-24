const $ = (
	value: any,
	setterFn: Function = x => x
): ESPointer => {

	const
		BASE_SYMBOL = Symbol(performance.now()),
		WATCHER_CALLBACKS = [],
		GETTER_FN = {
			get() {
				return value;
			}
		}
	;

	Object.defineProperty(window, BASE_SYMBOL, GETTER_FN);

	Object.defineProperty($, BASE_SYMBOL, {
		set(newValue) {
			WATCHER_CALLBACKS.forEach(x => x ? x(newValue) : undefined);
			value = setterFn(newValue);
			return true;
		},
		...GETTER_FN,
	});

	return {
		toString(): symbol {
			return BASE_SYMBOL;
		},
		watch(
			callbackFn: Function
		): ESPointer {
			WATCHER_CALLBACKS.push(callbackFn);
			return this;
		},
		into(
			transformerFn: Function
		): ESPointer {
			return this.fork()
		},
		to(
			destination: number,
			duration?: number = 1000,
			type: string
		): ESPointer {

			const
				TIMESTAMP = performance.now(),
				transformerFn = () => {
					CURRENT_TIMESTAMP = performance.now();
				}
			;

			let CURRENT_TIMESTAMP;

			switch(true) {
				case "requestAnimationFrame" in window: {
					requestAnimationFrame(transformerFn(requestAnimationFrame));
				};
			}
		},
		fork(): ESPointer {
			return $(value);
		},
	}
};

export { $ }