import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, catSchema } from './schema/cat.shema';
import { CatsController } from './controller/cats/cats.controller';
import { CatsService } from './service/cats/cats.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cats', schema: catSchema}])],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {}
