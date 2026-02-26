import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'
import {Product} from '../product.model';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductList {
  products:Product[]=[
    {
      id:1,
      name:"iphone 17 Pro",
      description:"Apple iPhone 17 Pro phone,256GB ,NanoSIM+eSim black-blue",
      price:825891,
      rating:5.0,
      image:"https://avatars.mds.yandex.net/i?id=b6ffc5ac184dee4d42ca72858c1df54fc02e30ca-7754586-images-thumbs&n=13",
      images:["https://avatars.mds.yandex.net/i?id=b6ffc5ac184dee4d42ca72858c1df54fc02e30ca-7754586-images-thumbs&n=13"],
      link:"https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-temno-sinii-145438959/?c=750000000"
    },
    {
      id:2,
      name:"iphone 16 Pro",
      description:"Apple iPhone 16 Pro phone,256GB ,NanoSIM+eSim gold",
      price:727500,
      rating:4.1,
      image:"https://avatars.mds.yandex.net/i?id=a649f445180e1838d128d36015d23afdbf0e8a0f-8819521-images-thumbs&n=13",
      images:["https://avatars.mds.yandex.net/i?id=a649f445180e1838d128d36015d23afdbf0e8a0f-8819521-images-thumbs&n=13"],
      link:"https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-nanosim-esim-zolotistyi-123890547/?c=750000000"
    },
    {
      id:3,
      name:"iphone 15 Pro",
      description:"Apple iPhone 15 Pro phone,256GB ,NanoSIM+eSim gray",
      price:749000,
      rating:4.8,
      image:"https://avatars.mds.yandex.net/i?id=c7b8655b9718fb120f713f50598052f3145f8c7f-12373036-images-thumbs&n=13",
      images:["https://avatars.mds.yandex.net/i?id=c7b8655b9718fb120f713f50598052f3145f8c7f-12373036-images-thumbs&n=13"],
      link:"https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-nanosim-esim-seryi-113138213/?c=750000000"
    },
    {
      id:4,
      name:"airpods Pro 3",
      description:"Apple AirPods Pro 3 white",
      price:129715,
      rating:4.4,
      image:"https://avatars.mds.yandex.net/i?id=b60f4622e859ab58275b10a362b99fae28dfca8e-5103569-images-thumbs&n=13",
      images:["https://avatars.mds.yandex.net/i?id=b60f4622e859ab58275b10a362b99fae28dfca8e-5103569-images-thumbs&n=13"],
      link:"https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-3-belyi-145554533/?c=750000000"
    },
    {
      id:5,
      name:"Macbook Air 13",
      description:"Laptop Apple Macbook Air 13 2022 13.6 /16GB /SSD 256GB /macOS ",
      price:458990,
      rating:3.8,
      image:"https://avatars.mds.yandex.net/i?id=06155f1806fab856a3f5d26eab3a4392b0a82479-4827339-images-thumbs&n=13",
      images:["https://avatars.mds.yandex.net/i?id=06155f1806fab856a3f5d26eab3a4392b0a82479-4827339-images-thumbs&n=13"],
      link:"https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4ru-a-132428983/?c=750000000"
    },
    {
      id:6,
      name:"Apple Watch SE",
      description:"Apple Watch SE GPS Gen.2 2024 S/M 40mm",
      price:139990,
      rating:4.6,
      image:"https://avatars.mds.yandex.net/i?id=30a3c6cb512e73142a2f22338da3c95a11e1f9b8-5657221-images-thumbs&n=13",
      images:["https://avatars.mds.yandex.net/i?id=30a3c6cb512e73142a2f22338da3c95a11e1f9b8-5657221-images-thumbs&n=13"],
      link:"https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000"
    },
    {
      id:7,
      name:"iPad Pro11",
      description:"Apple iPad Pro 11 2024 Wi-Fi 11 dium 8GB /256GB black",
      price:512535,
      rating:4.9,
      image:"https://avatars.mds.yandex.net/i?id=f2a3632b125a4fdfe4bf287e0ce6f3f00b1cb10c-10511855-images-thumbs&n=13",
      images:["https://avatars.mds.yandex.net/i?id=f2a3632b125a4fdfe4bf287e0ce6f3f00b1cb10c-10511855-images-thumbs&n=13"],
      link:"https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-11-djuim-8-gb-256-gb-chernyi-119774227/?c=750000000"
    },
    {
      id:8,
      name:"AirPos Max 2",
      description:"Apple AirPos Max 2 black-blue",
      price:276768,
      rating:4.1,
      image:"https://avatars.mds.yandex.net/i?id=569d5feddcc0360f727022f4717edafcc59005e0-5657221-images-thumbs&n=13",
      images:["https://avatars.mds.yandex.net/i?id=569d5feddcc0360f727022f4717edafcc59005e0-5657221-images-thumbs&n=13"],
      link:"https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-cherno-sinii-128622804/?c=750000000"
    },
    {
      id:9,
      name:"EarPods USB-C",
      description:"Apple EarPods USB-C white",
      price:9500,
      rating:2.7,
      image:"https://avatars.mds.yandex.net/i?id=c6675298b3bc58ea2361097970bad670ed63684f-5878985-images-thumbs&n=13",
      images:["https://avatars.mds.yandex.net/i?id=c6675298b3bc58ea2361097970bad670ed63684f-5878985-images-thumbs&n=13"],
      link:"https://kaspi.kz/shop/p/naushniki-apple-earpods-usb-c-belyi-114086432/?c=750000000"
    },
    {
      id:10,
      name:"Adapter",
      description:"Apple 20W USB-C Power Adapter white",
      price:1991,
      rating:1.0,
      image:"https://basket-24.wbbasket.ru/vol4160/part416014/416014167/images/big/1.webp",
      images:["https://basket-24.wbbasket.ru/vol4160/part416014/416014167/images/big/1.webp"],
      link:"https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000"
    }

  ];

  whatsApp(link:string){
    const url=`https://wa.me/?text=${encodeURIComponent(link)}`;
    window.open(url,'_blank');
  }
  telegram(link:string,name:string){
    const url=`https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(name)}`;
    window.open(url,'_blank');
  }
}