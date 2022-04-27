import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CatsDto } from 'src/cats/dtos/Cats.dto';
import { CatsService } from 'src/cats/service/cats/cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService){}

    @UsePipes(ValidationPipe)
    @Post()
    async create(@Body() catDto: CatsDto){
        console.log(catDto);
        return this.catsService.create(catDto);
    }

    @Get()
    async getCats(){
        return this.catsService.findAll();
    }

    @Get(':id')
    async getCatById(@Param('id') id: string){
        return this.catsService.findById(id);
    }

    @Delete('delete/:id')
    async deleteById(@Param('id') id: string){
        return this.catsService.deleteById(id);
    }

    @UsePipes(ValidationPipe)
    @Put('update/:id')
    async updateById(@Param('id') id: string, @Body() catData: CatsDto){
        return this.catsService.updateById(id, catData);
    }
}
