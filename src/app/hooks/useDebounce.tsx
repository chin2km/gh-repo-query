import { useState, useEffect } from 'react';

export const useDebounce = <T extends unknown>(value: T, timeout: number = 500) => {
    const [state, setState] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setState(value), timeout);

        return () => clearTimeout(handler);
    }, [value, timeout]);

    return state;
}