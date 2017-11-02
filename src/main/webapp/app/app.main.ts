import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './blocks/config/prod.config';
import { M2AdvertiseGatewayAppModule } from './app.module';

ProdConfig();

if (module['hot']) {
    module['hot'].accept();
}

platformBrowserDynamic().bootstrapModule(M2AdvertiseGatewayAppModule)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
