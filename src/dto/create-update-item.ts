import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUpdateItem {
	@IsNotEmpty({ message: 'Name is required' })
	readonly name: string;

	@IsNumber()
	@IsNotEmpty({ message: 'Qty is required' })
	readonly qty: number;

	@IsNotEmpty({ message: 'Description is requires' })
	readonly description: string;
}
