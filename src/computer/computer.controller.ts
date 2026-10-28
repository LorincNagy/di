import { Controller, Get } from '@nestjs/common';
import { DiskService } from '../disk/disk.service';
import { CpuService } from '../cpu/cpu.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private readonly cpuService: CpuService,
    private readonly diskService: DiskService,
  ) {}

  @Get('run')
  run() {
    return [this.cpuService.compute(1, 2), this.diskService.getData()];
  }
}
