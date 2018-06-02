import { ArrayPipe } from './array.pipe';

describe('StatusPipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
