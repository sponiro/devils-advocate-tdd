import {describe, expect, test} from '@jest/globals';
import {fence} from './fence';

describe('fence', () => {

    test('test1', () => {
        expect(fence([1, 2, 3])).toBe(true);
    });
})