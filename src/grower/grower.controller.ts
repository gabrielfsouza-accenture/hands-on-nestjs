import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GrowerService } from './grower.service';
import { CreateGrowerDto } from './dto/create-grower.dto';
import { UpdateGrowerDto } from './dto/update-grower.dto';
import { GrowerOutput } from './dto/grower-output';

@Controller('growers')
export class GrowerController {
  constructor(private readonly growerService: GrowerService) {}

  @Post()
  create(@Body() createGrowerDto: CreateGrowerDto): Promise<GrowerOutput> {
    return this.growerService.create(createGrowerDto);
  }

  @Get()
  findAll(): Promise<GrowerOutput[]> {
    return this.growerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<GrowerOutput> {
    return this.growerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGrowerDto: UpdateGrowerDto,
  ): Promise<GrowerOutput> {
    return this.growerService.update(+id, updateGrowerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.growerService.remove(+id);
  }
}
