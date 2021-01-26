import {
	Body,
	Controller,
	Get,
	HttpCode,
	Param,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from '../models/item.interface';
import { CreateUpdateItem } from '../dto/create-update-item';

@Controller('items')
export class ItemsController {
	constructor(private readonly itemService: ItemsService) {}

	@Get()
	@HttpCode(200)
	async findAll(): Promise<Item[]> {
		return await this.itemService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id') id): Promise<Item> {
		return await this.itemService.findOne(id);
	}

	@Post()
	@HttpCode(200)
	@UsePipes(new ValidationPipe({ transform: true }))
	async create(@Body() createItemDto: CreateUpdateItem): Promise<Item> {
		return await this.itemService.create(createItemDto);
	}
}
