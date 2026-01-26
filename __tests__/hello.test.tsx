/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';

describe('Test', () => {
  it('shows tested message', () => {
    expect('I am tested').toBe('I am tested');
  });
});
