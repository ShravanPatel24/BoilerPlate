import { Module } from '@nestjs/common'
import { ConfigurationModule } from './infrastructure/configuration/configuration.module'
import { UserModule } from './application/use-cases/User/user.module'

@Module({
	imports: [ConfigurationModule, UserModule, UserModule, UserModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
