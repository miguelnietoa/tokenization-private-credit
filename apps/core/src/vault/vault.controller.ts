import { Controller, Post, Body } from '@nestjs/common';
import { VaultService } from './vault.service';
import { AvailabilityForExchangeDto } from './dto/availability-for-exchange.dto';
import { ClaimDto } from './dto/claim.dto';

@Controller('vault')
export class VaultController {
  constructor(private readonly vaultService: VaultService) {}

  @Post('availability-for-exchange')
  async availabilityForExchange(@Body() dto: AvailabilityForExchangeDto) {
    const unsignedXdr = await this.vaultService.availabilityForExchange(dto);
    return { unsignedXdr };
  }

  @Post('claim')
  async claim(@Body() dto: ClaimDto) {
    const unsignedXdr = await this.vaultService.claim(dto);
    return { unsignedXdr };
  }
}
