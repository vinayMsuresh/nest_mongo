import { Injectable } from '@nestjs/common';
import { Cat } from 'src/cats/schema/cat.shema';
import {Model} from 'mongoose';
import { CatsDto } from 'src/cats/dtos/Cats.dto';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class CatsService {
    constructor(@InjectModel('Cats') private catModel: Model<Cat>){}

    async create(catsDto: CatsDto):Promise<Cat>{
        const createCat = new this.catModel(catsDto);
        return createCat.save();
    }

    async findAll():Promise<Cat[]>{
        return this.catModel.find().exec();
    }

    async findById(_id: string):Promise<Cat[]>{
        return this.catModel.findById(_id);
    }

    async deleteById(id: string) {
        return this.catModel.deleteOne({_id:id});
    }

    async updateById(id:string, catData: CatsDto){
        return this.catModel.findByIdAndUpdate(id, catData);
    }
}
