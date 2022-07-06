interface GrowerProps {
  id: number;
  documentNumber: string;
  value: number;
}

export class Grower {
  id: number;

  documentNumber: string;

  value: number;

  constructor(props: GrowerProps) {
    this.id = props.id;
    this.documentNumber = props.documentNumber;
    this.value = props.value;
  }
}
