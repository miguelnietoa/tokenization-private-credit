import { Controller, Post, Body } from '@nestjs/common';
import { VaultService } from './vault.service';
import { AvailabilityForExchangeDto } from './dto/availability-for-exchange.dto';

@Controller('vault')
export class VaultController {
  constructor(private readonly vaultService: VaultService) {}

  @Post('availability-for-exchange')
  async availabilityForExchange(@Body() dto: AvailabilityForExchangeDto) {
    const unsignedXdr = await this.vaultService.availabilityForExchange(dto);
    return { unsignedXdr };
  }
}
