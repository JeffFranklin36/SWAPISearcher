import { useContext } from 'react';
import { __RouterContext } from 'react-router';

export function useHistory() {
    return useContext(__RouterContext).history;
}
