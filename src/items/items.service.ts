import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Item } from '../models/item.interface';
import { CreateUpdateItem } from '../dto/create-update-item';

@Injectable()
export class ItemsService {
	constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

	async findAll(): Promise<any> {
		const items: Item[] = await this.itemModel.find();
		return {
			status: true,
			message: '',
			items: items,
		};
	}

	async findOne(id: ObjectId): Promise<Item> {
		return this.itemModel.findOne({ _id: id });
	}

	async create(item: CreateUpdateItem): Promise<Item> {
		const newItem = new this.itemModel(item);
		return newItem.save();
	}
}
