import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { BlogFileRepository, BlogMongoRepository } from './blog.repository';
import { Blog, BlogSchema } from './blog.schema';
import { MongooseModule } from '@nestjs/mongoose';

import { config } from 'dotenv';

config();

const mongoDB_PW = process.env.MONGO_ATLAS_PW;

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://mymongo:${mongoDB_PW}@cluster0.07ilpgz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/blog`,
    ),
    MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]),
  ],
  controllers: [BlogController],
  providers: [BlogService, BlogFileRepository, BlogMongoRepository],
})
export class AppModule {}
