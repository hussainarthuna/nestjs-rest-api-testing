import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';

@Module({
	imports: [
		MongooseModule.forRoot(
			'mongodb+srv://hussain:78652110@cluster0.ayovp.mongodb.net/nestjslearn?retryWrites=true&w=majority',
			{ useNewUrlParser: true },
		),
		ItemsModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
