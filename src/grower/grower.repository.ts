import { CreateGrowerDto } from './dto/create-grower.dto';
import { UpdateGrowerDto } from './dto/update-grower.dto';
import { Grower } from './entities/grower.entity';

export default class GrowerRepository {
  private growers: Grower[];

  constructor() {
    this.growers = [];
  }

  async create({
    id,
    documentNumber,
    value,
  }: CreateGrowerDto): Promise<Grower> {
    const grower = new Grower({ id, documentNumber, value });

    this.growers.push(grower);

    return grower;
  }

  async findAll(): Promise<Grower[]> {
    return this.growers;
  }

  async findById(id: number): Promise<Grower> {
    return this.growers.find((grower) => grower.id === id);
  }

  async update(id: number, props: UpdateGrowerDto): Promise<Grower> {
    const growerFound = await this.findById(id);

    if (growerFound) {
      growerFound.documentNumber = props.documentNumber;
      growerFound.value = props.value;
    }

    return growerFound;
  }

  async delete(id: number): Promise<void> {
    const growerIndexFound = this.growers.findIndex(
      (grower) => grower.id === id,
    );
    if (growerIndexFound !== -1) this.growers.splice(growerIndexFound, 1);
  }
}
