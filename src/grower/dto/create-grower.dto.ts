import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateGrowerDto {
  @ApiProperty({
    description: 'The id of a grower',
    example: 1,
  })
  id: number;
  @ApiProperty({
    description: 'The document number of a grower',
    example: '12312313200',
  })
  @IsString()
  documentNumber: string;

  @ApiProperty({
    description: 'The grower value',
    example: 10,
  })
  @IsNumber()
  value: number;
}
