import { CDNPipe } from './cdn-pipe.pipe';

describe('CdnPipePipe', () => {
  it('create an instance', () => {
    const pipe = new CDNPipe();
    expect(pipe).toBeTruthy();
  });
});
