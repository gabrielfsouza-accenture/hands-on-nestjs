import { PartialType } from '@nestjs/mapped-types';
import { CreateGrowerDto } from './create-grower.dto';

export class UpdateGrowerDto extends PartialType(CreateGrowerDto) {}
