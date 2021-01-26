import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Item {
	@Prop()
	name: string;

	@Prop()
	qty: string;

	@Prop()
	description: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
