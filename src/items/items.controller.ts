import { Controller, Get, Put, Post, Delete } from '@nestjs/common';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return 'Get All Items';
    }

    @Post()
    createItem(): string {
        return 'Create Item';
    }
}
