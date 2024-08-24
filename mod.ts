const $ = (value: any, setterFn = x => x): ESPointer => {

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
		watch(callbackFn: function): ESPointer {
			WATCHER_CALLBACKS.push(callbackFn);
			return this;
		},
		into(transformerFn: function): ESPointer {
			return 
		},
		fork(): ESPointer {
			return $(value);
		},
	}
};

export { $ }