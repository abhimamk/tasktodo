import { Status } from "./status";

describe('Status', () => {
  it('should create an instance', () => {
    expect(new Status(this.task_id,this.status1)).toBeTruthy();
  });
});
