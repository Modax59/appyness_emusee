import {useState} from 'react';
import { Input } from '@ui-kitten/components';

export const SearchInput = () => {

    const [value, setValue] = useState('');

    return (
        <Input
            style={{
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,

            }}
            placeholder='Search'
            value={value}
            onChangeText={nextValue => setValue(nextValue)}
        />
    );
};