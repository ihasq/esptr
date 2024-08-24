interface ESPointer {
	toString(): symbol;
	watch(): ESPointer;
	fork(): ESPointer;
}

const $ = (
	value: any,
	setterFn: Function = (x: any) => x
): ESPointer => {

	const
		BASE_SYMBOL = Symbol(performance.now()),
		WATCHER_CALLBACKS: Function[] = [],
		GETTER_FN = {
			get() {
				return value;
			}
		}
	;

	Object.defineProperty(window, BASE_SYMBOL, GETTER_FN);

	Object.defineProperty($, BASE_SYMBOL, {
		set(newValue) {
			WATCHER_CALLBACKS.forEach((x: Function) => x ? x(newValue) : undefined);
			value = setterFn(newValue);
			return true;
		},
		...GETTER_FN,
	});

	return {
		toString(): symbol {
			return BASE_SYMBOL;
		},
		watch(callbackFn?: Function): ESPointer {
			if(callbackFn) {
				WATCHER_CALLBACKS.push(callbackFn);
			}
			return this;
		},
		// into(
		// 	transformerFn: Function
		// ): ESPointer {
		// 	return this.fork()
		// },
		// to(
		// 	destination: number,
		// 	duration?: number = 1000,
		// 	type: string
		// ): ESPointer {

		// 	const
		// 		TIMESTAMP = performance.now(),
		// 		transformerFn = () => {
		// 			CURRENT_TIMESTAMP = performance.now();
		// 		}
		// 	;

		// 	let CURRENT_TIMESTAMP;

		// 	switch(true) {
		// 		case "requestAnimationFrame" in window: {
		// 			requestAnimationFrame(transformerFn(requestAnimationFrame));
		// 		};
		// 	}
		// },
		fork(): ESPointer {
			return $(value);
		},
	}
};

export { $ }