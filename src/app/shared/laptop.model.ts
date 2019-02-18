import {Cpu} from './cpu.model';

export class Laptop {
  constructor(
    public ComponyName: string,
    public LaptopModel: string,
    public cpuModel: Cpu,
    public ramModel: string,
    public hardDiskModel: string
  ) {
  }
}
