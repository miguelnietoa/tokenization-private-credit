import { Injectable } from '@nestjs/common';
import { SorobanService } from '../soroban/soroban.service';
import { AvailabilityForExchangeDto } from './dto/availability-for-exchange.dto';

@Injectable()
export class VaultService {
  constructor(private readonly soroban: SorobanService) {}

  availabilityForExchange(dto: AvailabilityForExchangeDto): Promise<string> {
    return this.soroban.buildContractCallTransaction(
      dto.contractId,
      'availability_for_exchange',
      {
        admin: dto.admin,
        enabled: dto.enabled,
      },
      dto.callerPublicKey,
    );
  }
}
