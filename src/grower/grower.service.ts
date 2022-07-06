import { Injectable } from '@nestjs/common';
import { CreateGrowerDto } from './dto/create-grower.dto';
import { GrowerOutput } from './dto/grower-output';
import { UpdateGrowerDto } from './dto/update-grower.dto';
import GrowerRepository from './grower.repository';

@Injectable()
export class GrowerService {
  constructor(private growerRepository: GrowerRepository) {}

  async create(createGrowerDto: CreateGrowerDto): Promise<GrowerOutput> {
    return this.growerRepository.create(createGrowerDto);
  }

  async findAll(): Promise<GrowerOutput[]> {
    return this.growerRepository.findAll();
  }

  async findOne(id: number): Promise<GrowerOutput> {
    return this.growerRepository.findById(id);
  }

  async update(
    id: number,
    updateGrowerDto: UpdateGrowerDto,
  ): Promise<GrowerOutput> {
    return this.growerRepository.update(id, updateGrowerDto);
  }

  async remove(id: number): Promise<void> {
    return this.growerRepository.delete(id);
  }
}
