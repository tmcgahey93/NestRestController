import { Controller, Get, Put, Post, Delete, Body } from '@nestjs/common';
import { ItemDto } from './dto/item.dto';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return 'Get All Items';
    }

    @Post()
    createItem(@Body() itemDto: ItemDto): string {
        return `Name: ${itemDto.name} Desc: ${itemDto.description} Qty: ${itemDto.qty}`;
    }
}
